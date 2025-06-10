<script setup>
  import TodoForm from './TodoForm.vue';
  import TodoList from './TodoList.vue';
</script>

<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form />
    <todo-list />
  </div>
</template>

<style scoped>
  .todo-app {
    width: 70%;
    min-height: 100vh;
    background-color: #f6f9ff;
    padding: 2vh;
  }
</style>