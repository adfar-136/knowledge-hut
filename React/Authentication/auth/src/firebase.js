// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Y_uZVwpuAFpImze0-sbUTwlBkJi2gbs",
  authDomain: "adfar-302b4.firebaseapp.com",
  databaseURL: "https://adfar-302b4-default-rtdb.firebaseio.com",
  projectId: "adfar-302b4",
  storageBucket: "adfar-302b4.appspot.com",
  messagingSenderId: "626752136558",
  appId: "1:626752136558:web:b2fa0cb12ee5c37d398d7f",
  measurementId: "G-T0S2SGZLX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
 export {app,auth}