import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  const manejarInicio = () => {
    if (usuario.trim() !== "") {
      localStorage.setItem("usuario", usuario);
      navigate("/dashboard");
    } else {
      alert("Por favor, ingresa tu nombre 🧡");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>😊 Bienvenido</h1>
        <p>Ingresa tu nombre para empezar a gestionar tus hábitos ✨</p>

        <input
          type="text"
          placeholder="Tu nombre..."
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <button onClick={manejarInicio}>Entrar 🚀</button>
      </div>
    </div>
  );
}

export default Login;
