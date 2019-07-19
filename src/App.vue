<template>
  <div id="app">
    <HelloWorld msg="Full Stack JS Developer"/>
    <div class="container">
      <button class="btn btn-sm" @click="fetchTokens">Fetch API Tokens</button>
      <button class="btn btn-sm" @click="clearTodos">Clear Todos</button>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="todo.id">
            <td>{{ index+1 }}</td>
            <td>{{ todo.title }}</td>
            <td>{{ todo.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    fetchTokens () {
      axios.get('http://localhost:3000/api/todos').then(({data}) => this.todos = data)
    },

    clearTodos () {
      this.todos = []
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
