import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDi7XPVlRenZFeqOWoqARoeCp7rhGc4ltA",
  authDomain: "olx-clone-c4660.firebaseapp.com",
  projectId: "olx-clone-c4660",
  storageBucket: "olx-clone-c4660.firebasestorage.app",
  messagingSenderId: "863094987907",
  appId: "1:863094987907:web:9b0a1ec051f3acefc28fb6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()