"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGTUYU27s_Z_I7kdXxZjF9j6syYjNSmXs",
  authDomain: "carrot-3864c.firebaseapp.com",
  projectId: "carrot-3864c",
  storageBucket: "carrot-3864c.appspot.com",
  messagingSenderId: "312338184212",
  appId: "1:312338184212:web:a26d3f8b1f69c4946f0f01"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

try {
    const docRef = await addDoc(collection(db, "Beverage"), {
      name: "Soda",
      price: 500,
      uploadDate: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
}
  






