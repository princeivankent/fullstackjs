<template>
  <div id="app">
    <HelloWorld msg="Full Stack JS Developer"/>
    <div class="container">
      <button class="btn btn-sm" @click="fetchTokens">Fetch API Tokens</button>
      <button class="btn btn-sm" @click="clearTokens">Clear Tokens</button>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Token</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(api_token, index) in api_tokens" :key="api_token.id">
            <td>{{ index+1 }}</td>
            <td>{{ api_token.token }}</td>
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
      api_tokens: []
    }
  },
  methods: {
    fetchTokens () {
      axios.get('http://localhost:3000/api/api_tokens').then(({data}) => this.api_tokens = data)
    },

    clearTokens () {
      this.api_tokens = []
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
