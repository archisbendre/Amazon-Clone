import firebase from "firebase";

const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyBtnxaNGUPI6IQ7VFHP5OzQqFgyMqBVJOs",
    authDomain: "clone-83b9a.firebaseapp.com",
    databaseURL: "https://clone-83b9a.firebaseio.com",
    projectId: "clone-83b9a",
    storageBucket: "clone-83b9a.appspot.com",
    messagingSenderId: "647033107779",
    appId: "1:647033107779:web:786caeafc5599ad8c82bf6",
    measurementId: "G-KLERJSVTHM"
});


const auth = firebase.auth();

export {auth};