// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };
 const firebaseConfig = {
   apiKey: "AIzaSyDX0nWW1KKhomHl-R9DGALrpFqQWPkVIdc",
   authDomain: "voucher-code-the-ganges.firebaseapp.com",
   projectId: "voucher-code-the-ganges",
   storageBucket: "voucher-code-the-ganges.firebasestorage.app",
   messagingSenderId: "8571493735",
   appId: "1:8571493735:web:f21918a77353e0bb2823c2",
 };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
