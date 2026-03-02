// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo3Ab_UBeSUPQ3WVgS6tQEdk46tJpJrrU",
  authDomain: "debbies-beauty-store.firebaseapp.com",
  projectId: "debbies-beauty-store",
  storageBucket: "debbies-beauty-store.firebasestorage.app",
  messagingSenderId: "132037981833",
  appId: "1:132037981833:web:3586be343abaeb2606f858",
  measurementId: "G-8R7T9FGR87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);

export default app;
