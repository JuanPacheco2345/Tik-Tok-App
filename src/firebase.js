import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdjLLRV0VoPF6FHNs_mA9zIUnxMo57ob4",
    authDomain: "tik-tok-clone-94d16.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-94d16.firebaseio.com",
    projectId: "tik-tok-clone-94d16",
    storageBucket: "tik-tok-clone-94d16.appspot.com",
    messagingSenderId: "906021573194",
    appId: "1:906021573194:web:c1089808f0dccefeb38cb3",
    measurementId: "G-WS0VX7RBMP",
};

const firebaseApp =
    firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;