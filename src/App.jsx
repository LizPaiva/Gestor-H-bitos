import { useState, useEffect } from "react";

function App() {
  const [habitos, setHabitos] = useState([]);
  const [nuevoHabito, setNuevoHabito] = useState("");

  // Cargar hábitos guardados al inicio
  useEffect(() => {
    const habitosGuardados = localStorage.getItem("habitos");
    if (habitosGuardados) {
      setHabitos(JSON.parse(habitosGuardados));
    }
  }, []);

  // Guardar hábitos cada vez que cambian
  useEffect(() => {
    localStorage.setItem("habitos", JSON.stringify(habitos));
  }, [habitos]);

  const agregarHabito = () => {
    if (nuevoHabito.trim() !== "") {
      setHabitos([
        ...habitos,
        { id: Date.now(), texto: nuevoHabito, completado: false },
      ]);
      setNuevoHabito("");
    }
  };

  const eliminarHabito = (id) => {
    setHabitos(habitos.filter((habito) => habito.id !== id));
  };

  const toggleCompletado = (id) => {
    setHabitos(
      habitos.map((habito) =>
        habito.id === id ? { ...habito, completado: !habito.completado } : habito
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Gestor de Hábitos</h1>

      <input
        type="text"
        value={nuevoHabito}
        onChange={(e) => setNuevoHabito(e.target.value)}
        placeholder="Escribe un hábito..."
      />
      <button onClick={agregarHabito}>Agregar</button>

      <ul>
        {habitos.map((habito) => (
          <li key={habito.id}>
            <input
              type="checkbox"
              checked={habito.completado}
              onChange={() => toggleCompletado(habito.id)}
            />
            <span style={{ textDecoration: habito.completado ? "line-through" : "none" }}>
              {habito.texto}
            </span>
            <button onClick={() => eliminarHabito(habito.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );

  
}


export default App;
