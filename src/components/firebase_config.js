import firebase  from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC8-zNVv-7EoUepv5fK3090AZF5s0gxrAA",
    authDomain: "daily-standup-a0c87.firebaseapp.com",
    projectId: "daily-standup-a0c87",
    storageBucket: "daily-standup-a0c87.appspot.com",
    messagingSenderId: "313619106588",
    appId: "1:313619106588:web:de0598d8492a31356508d9"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export {db} ;