// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGsuyktFhSWGe3Bah2t3YKYU8ppN86l0",
  authDomain: "netflix-react-d9e63.firebaseapp.com",
  projectId: "netflix-react-d9e63",
  storageBucket: "netflix-react-d9e63.appspot.com",
  messagingSenderId: "804872755170",
  appId: "1:804872755170:web:943e7c9054f464171ccbbb"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
