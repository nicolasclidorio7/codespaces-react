// src/App.js
import React from 'react';
import Tarefa from './Tarefa';
import './App.css'; // Opcional, para estilizar o container principal

function App() {
  const tarefas = [
    {
      id: 1,
      titulo: 'Comprar pão',
      responsavel: 'João',
      concluida: true,
    },
    {
      id: 2,
      titulo: 'Estudar React',
      responsavel: 'Maria',
      concluida: false,
    },
    {
      id: 3,
      titulo: 'Lavar o carro',
      responsavel: 'Pedro',
      concluida: false,
    },
    {
      id: 4,
      titulo: 'Ler um livro',
      responsavel: 'Ana',
      concluida: true,
    },
  ];

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <div className="lista-de-tarefas">
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            titulo={tarefa.titulo}
            responsavel={tarefa.responsavel}
            concluida={tarefa.concluida}
          />
        ))}
      </div>
    </div>
  );
}

export default App;