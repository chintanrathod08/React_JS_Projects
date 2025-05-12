import { initializeApp } from "firebase/app";
import {  getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhJOfs8Mh7w90uAE6jhQeW20h93gdCwro",
  authDomain: "react-chat-app-efdd3.firebaseapp.com",
  projectId: "react-chat-app-efdd3",
  storageBucket: "react-chat-app-efdd3.firebasestorage.app",
  messagingSenderId: "856349655838",
  appId: "1:856349655838:web:92c63f72d9ceb035f67f0f",
  measurementId: "G-ZHZB2JRQBS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)

export { auth,provider,db }