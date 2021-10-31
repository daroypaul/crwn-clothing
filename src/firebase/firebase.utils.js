import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCNQoYl5gcj9m5iKD9TGTCaK8tRpjDhMJE",
    authDomain: "crwn-db-9fd0b.firebaseapp.com",
    projectId: "crwn-db-9fd0b",
    storageBucket: "crwn-db-9fd0b.appspot.com",
    messagingSenderId: "1005969539663",
    appId: "1:1005969539663:web:e7d5dea1250b4bc5e0203a",
    measurementId: "G-7J7VF6J4EP"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;