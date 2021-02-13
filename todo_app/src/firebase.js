
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHfVercZjqFfvHUFLrDJFWFomH_G9U23w",
    authDomain: "todo-list-reactjs-89f47.firebaseapp.com",
    projectId: "todo-list-reactjs-89f47",
    storageBucket: "todo-list-reactjs-89f47.appspot.com",
    messagingSenderId: "154643598690",
    appId: "1:154643598690:web:2ae95f99068135e575b03b",
    measurementId: "G-1FZMBQ0Q3Y"
});

const db = firebaseApp.firestore();

export default db;