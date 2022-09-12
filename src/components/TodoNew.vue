
<template>
  <input type="text" placeholder="Add a Task" v-model="input" @keydown.enter="addTodo()" />
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import { newTodo } from "@/composables/todo";

export default defineComponent({

  setup() {

    const input = ref("");

    function addTodo() {
      newTodo(input.value)
      input.value = ""
    }

    return {
      input,
      addTodo
    };
  }

});
</script>

