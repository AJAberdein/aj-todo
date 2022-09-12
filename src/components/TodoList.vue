<template>
  <div class="options-bar">
    <div class="done options-bar"><input type="checkbox" id="done" v-model="done"> <label for="done">Done</label> <span class="label">Done</span></div>
    <div class="archived options-bar"><input type="checkbox" id="archived" v-model="archived"> <label for="archived">Archived</label> <span class="label">Archived</span></div>
    <div class="undo options-bar"> <span class="label" @click="undo()">Undo</span></div>
  </div>

  <div v-if="showTodos" v-for="item in todos" :key="item.id">
    <TodoItem :item="item"></TodoItem>
  </div>

  <div v-if="todos.length === 0 && !error">
    <h2 class="text-center">Create a TODO in the task-bar to get started.</h2>
  </div>

  <div v-if="error">
    <h2 v-if="error" class="text-center">{{error}}</h2>
  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";

import TodoItem from "@/components/TodoItem.vue";
import { ref, computed, onMounted } from 'vue'
import { filterTodos, fetchTodoData } from "@/composables/todo";
import { undo as undoHistory } from "@/composables/history";


export default defineComponent({
  components: {
    TodoItem,
  },
  setup() {
    const error = ref(false);
    const done = ref(true);
    const archived = ref(false);
    let showTodos = ref(true);

    let todos = computed(() => {
      return filterTodos({
        done: done.value,
        archived: archived.value
      })
    })

    const undo = () => {
      undoHistory()
      showTodos.value = false;
      showTodos.value = true;
    }

    onMounted(async () => {
      try {
        await fetchTodoData()
      } catch (e: any) {
        console.error(e.response.data)
        // Typing
        error.value = e?.response?.data?.message
      }
    })

    return {
      todos,
      done,
      archived,
      error,
      undo,
      showTodos
    };
  },

});

</script>

<style>
.options-bar {
  display: flex;
  justify-content: space-around;
  padding: 5px 0 10px;
  ;
  font-size: 25px;
}

.options-bar .label {
  padding: 5px;
}

.done input:checked+label {
  background: #4EECF0;
}

.archived input:checked+label {
  background: #FC5D73;
}

.text-center {
  text-align: center;
}
</style>

