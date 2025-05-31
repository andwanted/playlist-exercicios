import React from "react";
import "./ExerciseCard.css";

const ExerciseCard = ({ exercise, onRemove }) => {
  return (
    <div className="exercise-card glass-container">
      <iframe
        width="100%"
        height="180"
        src={`https://www.youtube.com/embed/${exercise.videoId}`}
        title={exercise.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="exercise-info">
        <h3>{exercise.name}</h3>
        <p><strong>Grupo Muscular:</strong> {exercise.muscleGroup}</p>
        <p><strong>Instruções:</strong> {exercise.instructions}</p>
        <p><strong>Dicas:</strong> {exercise.tips}</p>
      </div>
      <button className="remove-btn" onClick={() => onRemove(exercise.id)}>
        Remover
      </button>
    </div>
  );
};

export default ExerciseCard;
