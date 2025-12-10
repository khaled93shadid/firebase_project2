import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCTRXWh8l_e3vI5n7xvILsKU7sgwBJ82-0",
  authDomain: "project1-c2759.firebaseapp.com",
  projectId: "project1-c2759",
  storageBucket: "project1-c2759.firebasestorage.app",
  messagingSenderId: "1093153294046",
  appId: "1:1093153294046:web:91e9db35e3304bc7c5644f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);