<template>
  <div>
    <div v-if="!loggedIn">
      <h3>Sign in with Google</h3>
      <button @click="googleSignIn">SignIn With Google</button>
    </div>
    <h1 v-if="loggedIn">Welcome {{ displayName }}</h1>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth();

export default {
  data() {
    return {
      loggedIn: false,
      displayName: "",
    };
  },
  methods: {
    googleSignIn() {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.loggedIn = true;
          console.log(token);
          this.displayName = user.displayName;

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorMessage, errorCode, email, credential);
          // ...
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>