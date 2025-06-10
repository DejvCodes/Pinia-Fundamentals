<script setup>
  import { ref } from 'vue';
  import useTodoListStore from '@/stores/todoList';

  const todo = ref('');
  const store = useTodoListStore();

  const addItemAndClear = (item) => {
    if (item.length === 0) {
      return
    }

    store.addTodo(item)
    todo.value = ''
  };
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input v-model="todo" type="text"><button>Add</button>
    </form>
  </div>
</template>

<style scoped>
  form {
    margin-bottom: 15px;
  }
  input {
    width: 40%;
    height: 20px;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  button {
    width: 20%;
    color: white;
    background-color: #2f6089;
    font-weight: 800;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px 15px;
  }
</style>