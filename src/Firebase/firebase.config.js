// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2g1yMhfPH7De_JpkIvg5CiUcqDvZHTgI",
  authDomain: "e-bookself-10.firebaseapp.com",
  projectId: "e-bookself-10",
  storageBucket: "e-bookself-10.firebasestorage.app",
  messagingSenderId: "663801931286",
  appId: "1:663801931286:web:8964a2893079774fb43737",
  measurementId: "G-Z1JV6GTNLJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
