import React, { useState } from "react";
import HabitManager from "../components/HabitManager";
import "./Dashboard.css";

function Dashboard({ nombre, cerrarSesion }) {
  const [habitos, setHabitos] = useState([]);

  const total = habitos.length;
  const completados = habitos.filter((h) => h.completed).length;
  const progreso = total > 0 ? Math.round((completados / total) * 100) : 0;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>👋 Hola, {nombre}</h1>
        <p>¡Gestiona tus hábitos y alcanza tus metas! 💪</p>
        <button className="logout-btn" onClick={cerrarSesion}>
          Cerrar sesión 🔒
        </button>
      </header>

      <main className="dashboard-content">
        <section className="stats">
          <h2>📊 Tu Progreso</h2>
          <p>Total de Hábitos: {total}</p>
          <p>Completados: {completados}</p>
          <p>Progreso: {progreso}%</p>
        </section>

        <section className="habits">
          <HabitManager setHabitos={setHabitos} />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
