// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSTvAUh0Rq8Kh_zksE1N8Ukqi33_Zm7Ro",
  authDomain: "vue-chat-748de.firebaseapp.com",
  projectId: "vue-chat-748de",
  storageBucket: "vue-chat-748de.appspot.com",
  messagingSenderId: "741083700195",
  appId: "1:741083700195:web:63b67d49b36742057c9ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
function getChats(db) {
  const chatCols = collection(db, 'chats')
  return chatCols
}

export {db, getChats}