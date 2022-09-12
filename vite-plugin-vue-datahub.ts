import Datahub from "macaca-datahub";
import datahubMiddleware from "datahub-proxy-middleware";
import path from "path";
import { build } from "vite";

export default function datahub() {

  const datahubConfig = {
    port: 3010,
    hostname: '127.0.0.1',
    store: path.join(__dirname, 'data'),
    proxy: {
      '/api': {
        hub: 'sample',
      },
    },
    showBoard: true,
  };

  const defaultDatahub = new Datahub({
    port: datahubConfig.port,
  });

  return {
    name: 'datahub-proxy',
    configureServer(server) {
      // requires express as a dep
      datahubMiddleware(server.middlewares)(datahubConfig);
    },
    buildStart(id) {
      console.log('datahub onload....')
      // TODO: check if already running...
      defaultDatahub.startServer(datahubConfig).then(() => {
        console.log('datahub ready');
      });
    },
    buildEnd() {
      // TODO: kill datahub?
    }
  }
}