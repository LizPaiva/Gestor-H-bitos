import "./HabitManager.css";
import React, { useState, useEffect } from "react";

function HabitManager() {
  const [habito, setHabito] = useState("");
  const [habitos, setHabitos] = useState([]);

  // Cargar hábitos guardados
  useEffect(() => {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    setHabitos(habitosGuardados);
  }, []);

  // Guardar cambios
  useEffect(() => {
    localStorage.setItem("habitos", JSON.stringify(habitos));
  }, [habitos]);

  const agregarHabito = () => {
    if (habito.trim() !== "") {
      const nuevoHabito = { texto: habito, completado: false };
      setHabitos([...habitos, nuevoHabito]);
      setHabito("");
    }
  };

  const alternarCompletado = (index) => {
    const nuevosHabitos = [...habitos];
    nuevosHabitos[index].completado = !nuevosHabitos[index].completado;
    setHabitos(nuevosHabitos);
  };

  const eliminarHabito = (index) => {
    const nuevosHabitos = habitos.filter((_, i) => i !== index);
    setHabitos(nuevosHabitos);
  };

  return (
    <div className="habit-container">
      <h2 className="title">✨ Gestor de Hábitos ✨</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Escribe un nuevo hábito..."
          value={habito}
          onChange={(e) => setHabito(e.target.value)}
        />
        <button onClick={agregarHabito}>Agregar</button>
      </div>

      <ul className="habit-list">
        {habitos.map((item, index) => (
          <li
            key={index}
            className={`habit-item ${item.completado ? "completed" : ""}`}
            onClick={() => alternarCompletado(index)}
          >
            <span className="habit-text">
              {item.completado && <span className="checkmark">✅</span>}
              {item.texto}
            </span>
            <button className="delete-btn" onClick={(e) => {
              e.stopPropagation();
              eliminarHabito(index);
            }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitManager;
