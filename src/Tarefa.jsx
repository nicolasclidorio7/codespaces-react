// src/Tarefa.js
import React from 'react';
import './Tarefa.css';

function Tarefa({ titulo, responsavel, concluida }) {
  const statusClasse = concluida ? 'concluida' : 'pendente';

  return (
    <div className={`tarefa-card ${statusClasse}`}>
      <h3 className="titulo">{titulo}</h3>
      <p className="responsavel">Responsável: {responsavel}</p>
      <p className="status">Status: {concluida ? 'Concluída' : 'Pendente'}</p>
    </div>
  );
}

export default Tarefa;