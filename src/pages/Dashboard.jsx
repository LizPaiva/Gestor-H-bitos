import React from "react";
import HabitManager from "../components/HabitManager";
import "./Dashboard.css";

function Dashboard({ nombre, cerrarSesion }) {
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
          <p>Total de Hábitos: 2</p>
          <p>Completados: 1</p>
          <p>Progreso: 50%</p>
        </section>

      <section className="habits">
  <h2>Gestor de Hábitos cargando...</h2>
  <HabitManager />
</section>

      </main>
    </div>
  );
}

export default Dashboard;
