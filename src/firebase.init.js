// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7hsqD0h0EU32INwcAslh3eiDCxJWeaOY",
  authDomain: "geargagdet.firebaseapp.com",
  projectId: "geargagdet",
  storageBucket: "geargagdet.appspot.com",
  messagingSenderId: "694046145657",
  appId: "1:694046145657:web:c9d4b2bab590167e2b28a8",
  measurementId: "G-6BPP7WBXN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
