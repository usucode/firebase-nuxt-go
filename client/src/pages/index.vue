<template>
  <div v-if="$store.getters['auth/isSignIn']" class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <v-btn @click="apiPublic">public</v-btn>
    <v-btn @click="apiPrivate">private</v-btn>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: 'Welcome to Your Nuxt.js App'
    }
  },
  methods: {
    apiPublic: async function() {
      let res = await axios.get('http://localhost:8000/public')
      this.msg = res.data
    },
    apiPrivate: async function() {
      let res = await axios.get('http://localhost:8000/private')
      this.msg = res.data
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
v-btn {
  margin: 10px 0;
  padding: 10px;
}
</style>
