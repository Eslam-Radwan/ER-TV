import { generateHeader } from "../components/header.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "./firebase.js";

generateHeader()

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    login(email.value, password.value);
})



 async function login (email, password) {
    try {
        console.log(auth.currentUser);
        
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        console.log(auth.currentUser);
        
        console.log("User logged in:", userCredential.user);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        localStorage.setItem("isLoggedIn", true);
        console.log(JSON.parse(localStorage.getItem("user")));
        
        location.href = "./index.html";

    } catch (error) {
        console.error("Error logging in:", error.message);
    }
}