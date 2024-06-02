// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhB1jXKAiifAKx5sf3tTPNm8kEfbJizlI",
  authDomain: "ecommerce-9d7c8.firebaseapp.com",
  projectId: "ecommerce-9d7c8",
  storageBucket: "ecommerce-9d7c8.appspot.com",
  messagingSenderId: "128877690188",
  appId: "1:128877690188:web:ae4be7c79dec209a5423e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
