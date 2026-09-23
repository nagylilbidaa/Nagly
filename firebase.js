
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, where, doc, updateDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "ضع مفتاحك هنا",
  authDomain: "ضع هنا",
  projectId: "ضع هنا",
  storageBucket: "ضع هنا",
  messagingSenderId: "ضع هنا",
  appId: "ضع هنا"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage, collection, addDoc, onSnapshot, query, where, doc, updateDoc, getDocs, ref, uploadBytes, getDownloadURL };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
