import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeyAeGakS8GZAtam_HoP2KAQgDekmuWY0",
    authDomain: "crwn-db-35a88.firebaseapp.com",
    databaseURL: "https://crwn-db-35a88.firebaseio.com",
    projectId: "crwn-db-35a88",
    storageBucket: "crwn-db-35a88.appspot.com",
    messagingSenderId: "1046819978123",
    appId: "1:1046819978123:web:c48ceefa501a2d4a6c4d8e",
    measurementId: "G-NLPVZ2EBKT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); // always trigger the google popup for auth and sign in

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;