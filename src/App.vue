<template>
  <div id="app">
    <HelloWorld msg="Full Stack JS Developer"/>
    <ul>
      <li 
        v-for="api_token in api_tokens" 
        :key="api_token.id"
      >
        {{ api_token.token }}
      </li>
    </ul>
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
  mounted () {
    axios.get('http://localhost:3000/api/api_tokens').then(({data}) => this.api_tokens = data)
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
