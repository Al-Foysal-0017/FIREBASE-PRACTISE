import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmoGR9V4iPd5fXICYfv26baCD6wB5GjYA",
  authDomain: "test-d3b11.firebaseapp.com",
  projectId: "test-d3b11",
  storageBucket: "test-d3b11.appspot.com",
  messagingSenderId: "787648296078",
  appId: "1:787648296078:web:7e6d5ca7385023bd5e85df",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
