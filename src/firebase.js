// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxABDZheNynsMdTfPycHRmIogmNlW4qlQ",
  authDomain: "whatsapp-clone-56b84.firebaseapp.com",
  projectId: "whatsapp-clone-56b84",
  storageBucket: "whatsapp-clone-56b84.appspot.com",
  messagingSenderId: "8791165907",
  appId: "1:8791165907:web:cdc28c6e77aa17b706bd26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.fireStore();

export default db;