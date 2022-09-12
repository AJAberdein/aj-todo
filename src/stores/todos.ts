import { defineStore } from 'pinia'
import type { Todo } from "@/types/todo";

export const useTodoListStore = defineStore({
  id: 'todos',
  state: () => (
    {
      items: [] as Array<Todo.Item>,
    } as Todo.List
  ),
  getters: {
    /**
    * @returns {Array<Todo.Item>}
    */
    all: (state) => state.items,
    /**
     * @returns {Number}
     */
    length: (state) => state.items.length,
  },
  actions: {
    /**
     * Get item to the Todo list by id
     * @param {Number} id
     * @returns {Todo.Item | null}
    */
    get(id: Number): Todo.Item {
      return this.items.find((item: Todo.Item) => item.id === id) as Todo.Item;
    },
    /**
       * Get item to the Todo list by id
       * @param {Number} id
       * @returns {Todo.Item | null}
      */
    set(todos: Array<Todo.Item>): void {
      this.items = todos;
    },
    /**
     * Add item to the Todo List
     * @param {Todo.Item} todo
     */
    create(item: Todo.Item): void {
      this.items.push(item)
    },
    /**
     * Update item to the Todo list by id
     * @param {Number} id
     * @param {Todo.Item} newTodo
     */
    update(id: Number, newTodo: Todo.Item): void {
      let curTodo: Todo.Item = this.items.find((item: Todo.Item) => item.id === id) as Todo.Item;
      if (curTodo) curTodo = newTodo
    },
    /**
      * Delete item to the Todo list by todod
      * @param {Todo.Item} todo
      * @returns {null}
    */
    deleteTodo(todo: Todo.Item): void {
      this.items.splice(this.items.indexOf(todo), 1);
    },
  }
})
