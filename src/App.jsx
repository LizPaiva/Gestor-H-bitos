import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard"; 
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [nombreGuardado, setNombreGuardado] = useState(false);

  useEffect(() => {
    const nombreEnStorage = localStorage.getItem("nombre");
    if (nombreEnStorage) {
      setNombre(nombreEnStorage);
      setNombreGuardado(true);
    }
  }, []);

  const guardarNombre = () => {
    if (nombre.trim() !== "") {
      localStorage.setItem("nombre", nombre);
      setNombreGuardado(true);
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("nombre");
    setNombre("");
    setNombreGuardado(false);
  };

  return (
    <div className="app-container">
      {!nombreGuardado ? (
        <div className="login-container">
          <h1>👋 ¡Hola!</h1>
          <p>Escribe tu nombre para empezar:</p>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre..."
          />
          <button onClick={guardarNombre}>Guardar</button>
        </div>
      ) : (
        <Dashboard nombre={nombre} cerrarSesion={cerrarSesion} />
      )}
    </div>
  );
}

export default App;
