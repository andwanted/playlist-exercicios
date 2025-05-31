import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ exercises, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Buscar exercício..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && filteredExercises.length > 0 && (
        <ul className="search-results">
          {filteredExercises.map((exercise) => (
            <li
              key={exercise.id}
              onClick={() => {
                onSelect(exercise);
                setSearchTerm("");
              }}
            >
              {exercise.name} ({exercise.muscleGroup})
            </li>
          ))}
        </ul>
      )}
      {searchTerm && filteredExercises.length === 0 && (
        <div className="no-results">Nenhum exercício encontrado.</div>
      )}
    </div>
  );
};

export default SearchBar;
