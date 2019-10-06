import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBaP0GcrdQux2dOMsEdX9qq3zvbqKpaNhE",
    authDomain: "sgcc-9409e.firebaseapp.com",
    databaseURL: "https://sgcc-9409e.firebaseio.com",
    projectId: "sgcc-9409e",
    storageBucket: "sgcc-9409e.appspot.com",
    messagingSenderId: "630573191678",
    appId: "1:630573191678:web:30baf23551d36929ddb0af"
};

firebase.initializeApp(firebaseConfig)

export default firebase