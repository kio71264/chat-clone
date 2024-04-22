// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/firestore";
 
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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db};
