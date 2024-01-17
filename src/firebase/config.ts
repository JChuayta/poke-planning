import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVm-1SQwnzPC0JfPl93biC9VQEmsJW32s",
  authDomain: "poke-planning.firebaseapp.com",
  databaseURL: "https://poke-planning-default-rtdb.firebaseio.com",
  projectId: "poke-planning",
  storageBucket: "poke-planning.appspot.com",
  messagingSenderId: "606439021983",
  appId: "1:606439021983:web:7e621aaa2a42c8665431aa",
};

// Initialize Firebase
export const FirebaseApp = firebase.initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const db = getFirestore();