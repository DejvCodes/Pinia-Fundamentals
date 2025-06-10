<script setup>
  import useTodoListStore from '@/stores/todoList';
  import { storeToRefs } from 'pinia';

  const store = useTodoListStore();
  const { todoList } = storeToRefs(store);
  const { toggleCompleted, deleteTodo } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed}">{{ todo.item }}</span>
      <div>
        <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        <span @click="deleteTodo(todo.id)">&#10060;</span>
      </div>
    </div> 
  </div>
</template>

<style scoped>
  span {
    margin: 0 5px;
    cursor: pointer;
  }
  .item {
    display: flex;
    justify-content: center;
  }
  .content {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    border-bottom: 1px dotted black;
    padding: 5px;
  }
  .completed {
    text-decoration: line-through;
  }
</style>