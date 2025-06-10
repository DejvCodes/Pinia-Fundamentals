<script setup>
  import TodoApp from './components/TodoApp.vue';
</script>

<template>
  <todo-app />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    color: #2c3e50;
    background: #004b88;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: Arial, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>