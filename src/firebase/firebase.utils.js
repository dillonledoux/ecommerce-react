import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATcC3yjMieN-Fz7Fx0YJuBtIAgUBquekg",
    authDomain: "crwn-db-80998.firebaseapp.com",
    databaseURL: "https://crwn-db-80998.firebaseio.com",
    projectId: "crwn-db-80998",
    storageBucket: "crwn-db-80998.appspot.com",
    messagingSenderId: "61448894459",
    appId: "1:61448894459:web:279a0dbbf02b7250a07d5e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
