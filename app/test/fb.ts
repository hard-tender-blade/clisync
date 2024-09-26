// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKTgOaSjHkcLLt1qFpQ5qNrHTU_Gl9zmo",
    authDomain: "clisync-app.firebaseapp.com",
    projectId: "clisync-app",
    storageBucket: "clisync-app.appspot.com",
    messagingSenderId: "281184398153",
    appId: "1:281184398153:web:82f0ca1c1adbab688e4898",
    measurementId: "G-LX5LPWQE8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Firestore
import { getFirestore } from "firebase/firestore";
const db = getFirestore();

export { db };
