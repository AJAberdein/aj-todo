
import { useTodoListStore } from "@/stores/todos";
import { useHistoryStore } from "@/stores/history";


const serializeDeserialiseMe = (data: any) => {

    const serialized = JSON.stringify(data);
    const deserialized = JSON.parse(serialized)

    return deserialized;
}

export const save = (): void => {

    const todoListStore = useTodoListStore()
    const todo = todoListStore.all

    const historyStore = useHistoryStore();
    historyStore.set(serializeDeserialiseMe(todo))
}

export const undo = (): void => {

    const historyStore = useHistoryStore();
    const history = historyStore.get

    const todoListStore = useTodoListStore()
    todoListStore.set(serializeDeserialiseMe(history))
}
