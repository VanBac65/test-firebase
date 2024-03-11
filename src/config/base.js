// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDM3UeA2ewpnHrnlacKSSXyAZVm_cjU8",
  authDomain: "test-d5bff.firebaseapp.com",
  projectId: "test-d5bff",
  storageBucket: "test-d5bff.appspot.com",
  messagingSenderId: "570900990946",
  appId: "1:570900990946:web:bc401dbed276ab785447bb",
  measurementId: "G-PJMN8N4NJ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);