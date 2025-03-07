import { generateHeader } from "../components/header.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "./firebase.js";


const fullName = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

generateHeader()
const signUp = async (email, password) => {

    console.log(email);
    console.log(password);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
        location.href = "./login.html";
    } catch (error) {
        console.error("Error signing up:", error.message);
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    signUp(email.value, password.value)
    
})


