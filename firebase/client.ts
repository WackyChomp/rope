// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh6wxf8Vimmy1wn-VYvrH8d4v-06ebvQ4",
  authDomain: "projectrope-157a6.firebaseapp.com",
  projectId: "projectrope-157a6",
  storageBucket: "projectrope-157a6.firebasestorage.app",
  messagingSenderId: "524452458286",
  appId: "1:524452458286:web:635ff669d83c12aedd14bf",
  measurementId: "G-TFSCKVP0YW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);