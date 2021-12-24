import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ChfVBlwfqJn2C4otjmmOLtWacHeBHyw",
  authDomain: "fir-login-313b6.firebaseapp.com",
  projectId: "fir-login-313b6",
  storageBucket: "fir-login-313b6.appspot.com",
  messagingSenderId: "737820269547",
  appId: "1:737820269547:web:824a3ce514dc0d98f5d7ae",
  measurementId: "G-1JE7H4KYNR"
};

// Initialize Firebase
const firebaseAuth = initializeApp(firebaseConfig);

export default {
    firebaseAuth
}