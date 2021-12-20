// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdMwGzxl2LtBfJo3btNIete8CWJ0hKRjg",
  authDomain: "movies-20049.firebaseapp.com",
  projectId: "movies-20049",
  storageBucket: "movies-20049.appspot.com",
  messagingSenderId: "449932161848",
  appId: "1:449932161848:web:210195e4a6189010af87cd",
  measurementId: "G-JX8V5KGXZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);