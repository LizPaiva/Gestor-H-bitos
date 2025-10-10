import { useState, useEffect } from "react";
import HabitManager from "./components/HabitManager";
import Dashboard from "./components/Dashboard"; 
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
        <div className="dashboard-container">
          <h1>👋 Hola, {nombre}</h1>
          <p>¡Gestiona tus hábitos y alcanza tus metas! 💪</p>
          <button className="logout-btn" onClick={cerrarSesion}>
            Cerrar sesión 🔒
          </button>

          <Dashboard /> {/* 👈 aquí se muestra el nuevo panel */}
        </div>
      )}
    </div>
  );
}

export default App;
