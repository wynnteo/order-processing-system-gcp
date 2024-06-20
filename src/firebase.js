/* eslint-disable */
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "orderprocessingsystem.firebaseapp.com",
  projectId: "orderprocessingsystem",
  storageBucket: "orderprocessingsystem.appspot.com",
  messagingSenderId: "244205369552",
  appId: "1:244205369552:web:73c966048159c84bdb06d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export { messaging };
