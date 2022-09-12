<script setup lang="ts">
import TodoNew from '@/components/TodoNew.vue'
import ToDoList from '@/components/TodoList.vue'

</script>

<template>
  <main class="todoView">
    <div class="todoCtx">
      <TodoNew />
      <ToDoList />
    </div>
  </main>
</template>

<style>
.todoView {
  display: flex;
  justify-content: center;
}

.todoCtx {
  width: 800px;
}
</style>