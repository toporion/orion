// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhWgVQZDnNEcLjd_9904YdyWB-Dxduhas",
  authDomain: "agency-top-bc7c1.firebaseapp.com",
  projectId: "agency-top-bc7c1",
  storageBucket: "agency-top-bc7c1.firebasestorage.app",
  messagingSenderId: "228845128411",
  appId: "1:228845128411:web:ac8efb88ade6a66033dafe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;