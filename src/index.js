"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAGTUYU27s_Z_I7kdXxZjF9j6syYjNSmXs",
  authDomain: "carrot-3864c.firebaseapp.com",
  projectId: "carrot-3864c",
  storageBucket: "carrot-3864c.appspot.com",
  messagingSenderId: "312338184212",
  appId: "1:312338184212:web:a26d3f8b1f69c4946f0f01"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let container = document.querySelector('.container');

const deleteItem = (e) => {
db.collection("Product").doc(e.target.id).delete().then(() => {
    console.log("Document successfully deleted!");
    window.location.reload();
}).catch((error) => {
    console.error("Error removing document: ", error);
});
}

const updateItem = (e) => {
window.location.href = "update.html";
}

db.collection("Product").get().then(a => {
  a.forEach(doc => {
    let docu = doc.data();
    let child = `
    <p>
      <div>
        <div class="name">Product name : ${docu.name}</div>
        <div class="price">Product price : ${docu.price}$</div>
        <div class="date">Upload Date : ${docu.uploadDate.toDate().toDateString()}</div>
      </div>
      <input type="button" value="Delete Item" class="deleteBtn" id=${doc.id}>
      <input type="button" value="Edit Item" class="updateBtn">
    </p>
    
    `;
    container.innerHTML += child;
  })
  const deleteBtn = document.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", deleteItem);
}
);





