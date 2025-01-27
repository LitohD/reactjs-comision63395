import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBzqCY-fqpAYhA6WI8E9sWvlNeMLpiydNg",
    authDomain: "ecommerce-63395-jose-presa.firebaseapp.com",
    projectId: "ecommerce-63395-jose-presa",
    storageBucket: "ecommerce-63395-jose-presa.firebasestorage.app",
    messagingSenderId: "899004834896",
    appId: "1:899004834896:web:38dcdda8720cd1dfe65d55"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore ();

export default db

