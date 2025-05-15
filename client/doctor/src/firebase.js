// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzyXCRVGENOlkXXt0HgOBqj2kkQkN21rg",
  authDomain: "heartshield-7d059.firebaseapp.com",
  projectId: "heartshield-7d059",
  storageBucket: "heartshield-7d059.firebasestorage.app",
  messagingSenderId: "116264354140",
  appId: "1:116264354140:web:57ee2875392dacb8044199",
  measurementId: "G-C4LQKWFHP8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);