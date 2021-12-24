<template>
  <div>
    <h3>Register</h3>
    <input type="email" name="" v-model="email" />
    <input type="password" v-model="password" name="" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import firebaseAuth from "@/plugins/firebaseAuth";
console.log(firebaseAuth)
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
        console.log(this.email,  this.password)
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, userCredential);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>