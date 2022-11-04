// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {doc, setDoc, getFirestore} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmIfdY9vwLpWxFiu8vbGQbONjhoLvZKmQ",
  authDomain: "app-ejercicio-tiempo.firebaseapp.com",
  projectId: "app-ejercicio-tiempo",
  storageBucket: "app-ejercicio-tiempo.appspot.com",
  messagingSenderId: "751282526701",
  appId: "1:751282526701:web:7026eeb5aeb72637c82fe4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const querySnapshot = await getDocs(collection(db, "usuarios"));

  // Add a new document in collection "cities"
  export async function insertUser(user) {
    await setDoc(doc(db, "libros", "24345"), {
        usuario: "gerar@gmail.com",
        passw: "1233454"
    });
}
  /* await setDoc(doc(db, "tasks", generateRandomIdTask(20)), task); */