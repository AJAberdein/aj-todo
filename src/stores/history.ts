import { defineStore } from 'pinia'
import type { Todo } from "@/types/todo";

export const useHistoryStore = defineStore({
  id: 'history',
  state: () => (
    {
      items: [] as Array<Todo.Item>,
    } as Todo.List
  ),
  getters: {
    /**
    * @returns {Array<Todo.Item>}
    */
    get: (state) => state.items,
  },
  actions: {
    /**
       * Get item to the Todo list by id
       * @param {Number} id
       * @returns {Todo.Item | null}
      */
    set(todos: Array<Todo.Item>): void {
      this.items = todos;
    },
  }
})
