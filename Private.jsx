import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "./firebase/FirebaseConfig";
import LoginAdmin from "./src/pages/LoginAdmin/LoginAdmin";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const [carregando, setCarregando] = useState(true);
  const [userLogado, setUserLogado] = useState(false);

  useEffect(() => {
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
        };

        localStorage.setItem("@rotaPrivadaAdmin", JSON.stringify(userData));
        setUserLogado(true);
      } else {
        setUserLogado(false);
      }
      setCarregando(false);
    });

    // Clean up the subscription on component unmount
    return () => checkLogin();
  }, []);

  if (carregando) {
    return <LoginAdmin />;
  }

  if (!userLogado) {
    return <LoginAdmin/>;
  }

  return children;
};

export default Private;
