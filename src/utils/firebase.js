// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKE1EwCFWEwPKh5iiR7R_WaJcCNO_YHXQ",
  authDomain: "netflixgpt-93385.firebaseapp.com",
  projectId: "netflixgpt-93385",
  storageBucket: "netflixgpt-93385.appspot.com",
  messagingSenderId: "320940250952",
  appId: "1:320940250952:web:d27aa10906d73c4400457d",
  measurementId: "G-3Y34KDBK9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();