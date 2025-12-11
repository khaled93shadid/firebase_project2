import React, { useEffect, useState } from "react";
import { auth, loginWithGoogle, logout } from "./firebase";
import img from './assets/google-408194_1280.png'
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [user, setUser] = useState(null);

  // When the app loads, listen to Firebase authentication changes.
  // Whenever Firebase detects login or logout, update the React state (setUser).
  // When the component is destroyed, remove the listener to avoid multiple listeners running.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 ">
      <img style={{width:'300px'}} className="img-thumbnail shadow-lg mb-4" src={img} alt="" />
     
      {!user ? (
        <button className="btn btn-primary btn-lg mt-4 shadow-lg fw-bold rounded btn-hover" onClick={loginWithGoogle}>
          Login with Google
        </button>
      ) : (
        <div className="text-center">
          <img
            src={user.photoURL}
            alt="profile"
            className="rounded-circle mb-3"
            style={{ width: "120px", height: "120px" }}
          />
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <button className="btn btn-secondary mt-3" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}