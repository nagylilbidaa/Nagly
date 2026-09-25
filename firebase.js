  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const firebaseConfig = {
  apiKey: "AIzaSyC5Wxnuy0CwhKSiSArMoW1r3VRwEb2jLqY",
  authDomain: "nagly-81892.firebaseapp.com",
  databaseURL: "https://nagly-81892-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nagly-81892",
  storageBucket: "nagly-81892.firebasestorage.app",
  messagingSenderId: "868776490039",
  appId: "1:868776490039:web:f5ee42a18804acc68bbbb2",
  measurementId: "G-9GZEQ0PFBH"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
