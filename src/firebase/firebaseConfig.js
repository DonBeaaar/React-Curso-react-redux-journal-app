import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLsyQK8U2S0ZBah15dG5Uq4eYFU3qXsr4",
  authDomain: "react-apps-curso-f6ed4.firebaseapp.com",
  databaseURL: "https://react-apps-curso-f6ed4.firebaseio.com",
  projectId: "react-apps-curso-f6ed4",
  storageBucket: "react-apps-curso-f6ed4.appspot.com",
  messagingSenderId: "280944389725",
  appId: "1:280944389725:web:3f14460959a9e818bfe7b4",
  measurementId: "G-4EYVHRSCK7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}


//   firebase.analytics();
