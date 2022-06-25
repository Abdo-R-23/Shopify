import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyCdJzTRZU1LScIxt2vjCsVQhKcCa-b5bW4",

  authDomain: "grad-project-a19b8.firebaseapp.com",

  projectId: "grad-project-a19b8",

  storageBucket: "grad-project-a19b8.appspot.com",

  messagingSenderId: "236993039674",

  appId: "1:236993039674:web:3b0d995710d5f645c7d403"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };