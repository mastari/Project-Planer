import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCX0JbVg6PpXbrZC-9215SrlSkdhR61zGA",
    authDomain: "scheduler-4bad0.firebaseapp.com",
    databaseURL: "https://scheduler-4bad0.firebaseio.com",
    projectId: "scheduler-4bad0",
    storageBucket: "scheduler-4bad0.appspot.com",
    messagingSenderId: "969645920597"
};
var fb = firebase.initializeApp(config);

export default fb;