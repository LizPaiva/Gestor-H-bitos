function HabitManager({ setHabitos }) {
  const [habitos, setListaHabitos] = useState(() => {
    const guardados = localStorage.getItem("habitos");
    return guardados ? JSON.parse(guardados) : [];
  });
  const [nuevoHabito, setNuevoHabito] = useState("");

  useEffect(() => {
    localStorage.setItem("habitos", JSON.stringify(habitos));
    setHabitos(habitos); // 🔥 enviamos los hábitos al Dashboard
  }, [habitos]);

  const agregarHabito = () => {
    if (nuevoHabito.trim() === "") return;
    const nuevo = { id: Date.now(), texto: nuevoHabito, completed: false };
    setListaHabitos([...habitos, nuevo]);
    setNuevoHabito("");
  };

  const toggleCompleto = (id) => {
    setListaHabitos(
      habitos.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      )
    );
  };

  const eliminarHabito = (id) => {
    setListaHabitos(habitos.filter((h) => h.id !== id));
  };

  return (
    <div className="habit-container">
      <h2 className="title">Gestor de Hábitos</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nuevo hábito..."
          value={nuevoHabito}
          onChange={(e) => setNuevoHabito(e.target.value)}
        />
        <button onClick={agregarHabito}>Agregar</button>
      </div>

      <ul className="habit-list">
        {habitos.map((habito) => (
          <li
            key={habito.id}
            className={`habit-item ${habito.completed ? "completed" : ""}`}
            onClick={() => toggleCompleto(habito.id)}
          >
            <span>{habito.texto}</span>
            <button className="delete-btn" onClick={() => eliminarHabito(habito.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
