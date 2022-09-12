<template>
  <div class="task bgyellow black" :class="'status'+item.status">
    <div>
      <CIcon v-if="item.status === 0" :icon="cilCircle" @click="complete()" size="sm" class="icon" />
      <CIcon v-if="item.status !== 0" :icon="cilCheckCircle" @click="complete()" size="sm" class="icon" />
      <div class="todo-content">{{item.data}}</div>
    </div>
    <div>
      <CIcon v-if="item.status !== 2" :icon="cilXCircle" @click="archive()" size="sm" class="icon" />
      <CIcon v-if="item.status === 2" :icon="cilTrash" @click="remove()" size="sm" class="icon" />
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { CIcon } from '@coreui/icons-vue';
import { cilTrash, cilCheckCircle, cilCircle, cilXCircle } from '@coreui/icons';
import { completeTodo, archiveTodo, removeTodo } from "@/composables/todo";
import type { Todo } from "@/types/todo";

export default defineComponent({
  props: ['item'],
  components: {
    CIcon
  },
  setup(props) {

    const item: Todo.Item = props.item

    const complete = () => completeTodo(item);
    const archive = () => archiveTodo(item);
    const remove = () => removeTodo(item);

    return {
      item,
      complete,
      archive,
      remove,
      cilTrash,
      cilCheckCircle,
      cilCircle,
      cilXCircle
    };
  }
});

</script>

<style>
.icon {
  width: 30px;
  cursor: pointer;
  position: relative;


}

.todo-content {
  display: inline-flex;
  bottom: 5px;
  position: relative;
  margin: 0 10px;

}

.task {
  padding: 20px;
  margin: 1px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;

}

.status0 {
  background-color: #FDD675;
}

.status1 {
  background-color: #4EECF0;

}

.status2 {
  background-color: #FC5D73;

}
</style>
