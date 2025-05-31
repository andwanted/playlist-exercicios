import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ExerciseCard from "./components/ExerciseCard";
import exercisesData from "./data/exercises.json";
import "./index.css";

function App() {
  const [playlist, setPlaylist] = useState([]);

  const handleAddExercise = (exercise) => {
    // Evita duplicados
    if (!playlist.find((e) => e.id === exercise.id)) {
      setPlaylist([...playlist, exercise]);
    }
  };

  const handleRemoveExercise = (id) => {
    setPlaylist(playlist.filter((e) => e.id !== id));
  };

  // Salvar no localStorage ao alterar playlist
  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  // Carregar playlist do localStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem("playlist");
    if (saved) {
      setPlaylist(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="app-container">
      <h1>Playlist de Exercícios</h1>
      <SearchBar exercises={exercisesData} onSelect={handleAddExercise} />
      <div className="playlist-container">
        {playlist.length === 0 && <p>Adicione exercícios para montar sua playlist.</p>}
        {playlist.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onRemove={handleRemoveExercise}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
