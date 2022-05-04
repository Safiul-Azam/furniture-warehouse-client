// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_OCoLlmhldHAyPCYWsMlG2LA8p2IwHkI",
  authDomain: "furniture-ware-house-c81c0.firebaseapp.com",
  projectId: "furniture-ware-house-c81c0",
  storageBucket: "furniture-ware-house-c81c0.appspot.com",
  messagingSenderId: "892045140178",
  appId: "1:892045140178:web:e9be559b6c5157deed4d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth