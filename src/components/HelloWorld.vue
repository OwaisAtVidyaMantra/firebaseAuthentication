<template>
  <div>
    <router-link to="/signup">Register</router-link>
    <h3>Login</h3>
      <input type="email" placeholder="Email" name="email" id="email" v-model="email">
      <input type="password" placeholder="Password" name="password" id="password" v-model="password">
      <button @click="login">Submit</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import firebaseAuth from '@/plugins/firebaseAuth'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export default {
  data() {
    return {
     email:'',
     password:''
    };
  },
  mounted() {
   
  },
  methods: {
    login(){
      const email= this.email
      const password = this.password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
     alert('Successfully Logged IN!');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>