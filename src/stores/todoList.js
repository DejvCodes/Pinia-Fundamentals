import { defineStore } from "pinia";

const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId
      })
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((object) => object.id === idToFind)

      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export default useTodoListStore