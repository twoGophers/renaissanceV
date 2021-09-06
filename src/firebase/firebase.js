import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJnk_iHwY-32aMLrKlIlL5jyNHdkdT3B0",
  authDomain: "renaisancevue2.firebaseapp.com",
  projectId: "renaisancevue2",
  storageBucket: "renaisancevue2.appspot.com",
  messagingSenderId: "618323044156",
  appId: "1:618323044156:web:ccc3b170c57f361287e039",
  measurementId: "G-SXBFHVNDXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default {
  app,
  database
}