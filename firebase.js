  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "naqli-xxxxx.firebaseapp.com",
  projectId: "naqli-xxxxx",
  storageBucket: "naqli-xxxxx.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123456:web:abc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


