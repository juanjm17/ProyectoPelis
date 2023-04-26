import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";




const firebaseConfig = {
  apiKey: "AIzaSyDttN2mEiMpDOgT-8NU4e0wV4toCygfsHM",
  authDomain: "movies-18ddd.firebaseapp.com",
  projectId: "movies-18ddd",
  storageBucket: "movies-18ddd.appspot.com",
  messagingSenderId: "730636268799",
  appId: "1:730636268799:web:4f4d4d4dd4d4d4d4d4d4d4"
};

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        toast.success('¡Bienvenido! Has iniciado sesión correctamente.');
      })
      .catch((error) => {
        toast.error(`Ha ocurrido un error al iniciar sesión: ${error.message}`);
      });
  };

  // Redirigir a la página /main si ya se ha iniciado sesión
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location.href = "/main";
    }
  });

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
      <ToastContainer />
      <p>¿Aún no tienes cuenta? <Link to="/signup">Regístrate</Link></p>
    </div>
  );
};

export default Login;
