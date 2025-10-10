import React, { useState } from "react";
import "./Login.css"; // crearemos este archivo de estilos después

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Simulamos un inicio de sesión básico
    if (usuario.trim() !== "" && contrasena.trim() !== "") {
      localStorage.setItem("usuarioActivo", usuario);
      onLogin(usuario); // Llama a la función del App.jsx
    } else {
      alert("Por favor ingresa tu usuario y contraseña");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarEnvio} className="login-form">
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
