import { useState, useEffect } from "react";
import "./bienestar.css";

function Bienestar() {
  const [estadoAnimo, setEstadoAnimo] = useState(localStorage.getItem("estadoAnimo") || "");

  useEffect(() => {
    localStorage.setItem("estadoAnimo", estadoAnimo);
  }, [estadoAnimo]);

  return (
    <div className="bienestar-container">
      <h2>🧘 Sección de Bienestar</h2>

      <textarea
        placeholder="Escribe cómo te sentiste hoy..."
        value={estadoAnimo}
        onChange={(e) => setEstadoAnimo(e.target.value)}
      ></textarea>

      <h3>🎥 Videos inspiradores</h3>
      <iframe
        width="320"
        height="180"
        src="https://www.youtube.com/embed/N8sR0u7l4Pg"
        title="Motivación deportiva"
        allowFullScreen
      ></iframe>

      <h3>🍎 Recetas saludables</h3>
      <a href="https://www.eatwell101.com/" target="_blank" rel="noopener noreferrer">
        Ver recetas saludables
      </a>
    </div>
  );
}

export default Bienestar;
