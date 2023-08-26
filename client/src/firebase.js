// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-81884.firebaseapp.com",
  projectId: "mern-auth-81884",
  storageBucket: "mern-auth-81884.appspot.com",
  messagingSenderId: "898162744443",
  appId: "1:898162744443:web:979362464a1d87af4bd6de",
  measurementId: "G-DJCN0V274T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
