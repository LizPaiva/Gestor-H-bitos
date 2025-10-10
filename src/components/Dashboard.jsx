import React, { useEffect, useState } from "react";

function Dashboard() {
  const [nombre, setNombre] = useState("");
  const [habitos, setHabitos] = useState([]);

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("nombre");
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    if (nombreGuardado) setNombre(nombreGuardado);
    setHabitos(habitosGuardados);
  }, []);

  const habitosCompletados = habitos.filter((h) => h.completado).length;
  const total = habitos.length;
  const progreso = total > 0 ? Math.round((habitosCompletados / total) * 100) : 0;

  return (
    <div className="dashboard-container">
      <h2>👋 Hola, {nombre || "Usuario"} </h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total de Hábitos</h3>
          <p>{total}</p>
        </div>
        <div className="card">
          <h3>Completados</h3>
          <p>{habitosCompletados}</p>
        </div>
        <div className="card">
          <h3>Progreso</h3>
          <p>{progreso}%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
