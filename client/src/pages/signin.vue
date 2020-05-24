<template>
  <div class="signin">
    <h2>Sign in</h2>
    <v-text-field type="text" label="email" v-model="email" />
    <v-text-field type="password" label="Password" v-model="password" />
    <v-btn @click="signIn">Signin</v-btn>
    <p>
      You don't have an account?
      <nuxt-link to="/signup">create account now!!</nuxt-link>
    </p>
  </div>
</template>

<script>
import { auth } from '~/plugins/firebase'
export default {
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function() {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        (res) => {
          auth.currentUser.getIdToken(true).then(function(idToken) {
            localStorage.setItem('jwt', idToken)
          })
          this.$router.push('/')
        },
        (err) => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

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
.signin {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>
