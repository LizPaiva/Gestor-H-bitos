import HabitManager from "../components/HabitManager";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("usuario");
    if (nombreGuardado) {
      setUsuario(nombreGuardado);
    } else {
      // Si no hay usuario, volver al login
      navigate("/");
    }
  }, [navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
  <h2>👋 Hola, {usuario}</h2>
  <p>Bienvenido a tu Gestor de Hábitos</p>

  <HabitManager />  {/* Aquí aparece tu gestor */}
  
  <button onClick={cerrarSesion}>Cerrar sesión</button>
</div>
  );
}

export default Dashboard;
