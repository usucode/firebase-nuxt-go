<template>
  <div class="signup">
    <h2>Sign up</h2>
    <v-text-field type="text" label="Username" v-model="email" />
    <v-text-field type="password" label="Password" v-model="password" />
    <v-btn>Register</v-btn>
    <p>
      Do you have an account?
      <nuxt-link to="/signin">sign in now!!</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
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
.signup {
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