// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmLsga9EmRRyU-mlMwnf5-6U0QRwuH5kI",
  authDomain: "mealstogo-92686.firebaseapp.com",
  projectId: "mealstogo-92686",
  storageBucket: "mealstogo-92686.appspot.com",
  messagingSenderId: "210812673643",
  appId: "1:210812673643:web:d8d6ff06e7c655d2205b2e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);