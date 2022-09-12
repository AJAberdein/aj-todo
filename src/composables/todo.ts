
import { useTodoListStore } from "@/stores/todos";
import { Todo } from "@/types/todo";
import { save } from "@/composables/history"
import axios from 'axios'

export const fetchTodoData = async (): Promise<any> => {

    const response = await axios.get("http://localhost:3010/data/todo/todo")
    const todoList = useTodoListStore();
    todoList.set(response.data);
    return response

}

export const newTodo = (data: String): Todo.Item => {

    const todoList = useTodoListStore()
    const prevItem = todoList.all.at(-1)
    const id = prevItem ? prevItem.id + 1 : 0
    const todo: Todo.Item = {
        id,
        data,
        status: Todo.Status.InProgress,
        created: new Date()
    }
    todoList.create(todo)

    return todo;
}

export const completeTodo = (todo: Todo.Item): void => {

    save();
    todo.status = todo.status === Todo.Status.InProgress ? Todo.Status.Complete : Todo.Status.InProgress

}

export const archiveTodo = (todo: Todo.Item): void => {

    save();
    todo.status = todo.status === Todo.Status.Archived ? Todo.Status.InProgress : Todo.Status.Archived

}

export const removeTodo = (todo: Todo.Item): void => {

    save();
    const todoList = useTodoListStore();
    todoList.deleteTodo(todo);

}

export const filterTodos = (filters: Todo.Filters): Array<Todo.Item> => {

    const todoList = useTodoListStore();
    let todos = todoList.all;

    todos = todos.filter(todo => {
        // if (todo.status === Todo.Status.InProgress) return true
        // if (filters.done && todo.status === Todo.Status.Complete) return true
        // if (filters.archived && todo.status === Todo.Status.Archived) return true

        const showInProgress = todo.status === Todo.Status.InProgress
        const showCompleted = filters.done && todo.status === Todo.Status.Complete
        const showArchived = filters.archived && todo.status === Todo.Status.Archived

        return showInProgress || showCompleted || showArchived


    })

    return todos;
}
