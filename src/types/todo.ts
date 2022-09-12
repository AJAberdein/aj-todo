export namespace Todo {
  export enum Status {
    InProgress,
    Complete,
    Archived
  }

  export type Item = {
    id: number;
    data: String;
    status: Status;
    created?: Date;
  }

  export type List = {
    items: Array<Todo.Item>;
  };

  export type Filters = {
    done: boolean,
    archived: boolean
  }

}


