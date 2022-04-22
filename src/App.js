//import './App.css';
import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { Todolist } from './TodoList';
import { TodoItem } from './TodoItem';

const todos = [
  { id: 1, text: 'Preparar ceviche.', completed: false },
  { id: 2, text: 'Tomar el curso de introducción a React.', completed: false },
  { id: 3, text: 'Practicar React', completed: false },
];

function App(props) {
  //Deestructuramos las propiedades enviadas por los props
  //let { saludo } = { ...props };

  //El React.Fragment no genera una etiqueta dentro del DOM, pero
  //ayuda al render de React para devolver un solo elemento.

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <Todolist>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </Todolist>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
