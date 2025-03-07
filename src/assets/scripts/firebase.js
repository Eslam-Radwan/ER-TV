import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA9zzB4pvOmMlNNA5pKoEE3KaBXlGvZnco",
    authDomain: "er-tv-4d604.firebaseapp.com",
    projectId: "er-tv-4d604",
    storageBucket: "er-tv-4d604.firebasestorage.app",
    messagingSenderId: "367638370198",
    appId: "1:367638370198:web:6a58792c4cadafd7f36fb7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
