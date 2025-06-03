import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzYYj8eUmuvNOzjN7BO9AV6uhYZ33oYBk",
  authDomain: "clone-21ad4.firebaseapp.com",
  projectId: "clone-21ad4",
  storageBucket: "clone-21ad4.firebasestorage.app",
  messagingSenderId: "712413343320",
  appId: "1:712413343320:web:d66ceaa6f3701dbba3e42d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()





//what do we expect as a juniour dev at bootcamp? lets say we have
//the skill 
//how do we network with really helpful clients