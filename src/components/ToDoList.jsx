import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';
import AddToDoForm from './AddToDoForm';

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy bread', completed: false },
    { id: 2, text: 'Complete lab 3 React', completed: true },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AddToDoForm onAddTodo={addTodo} />
      <ul className="space-y-2">
        {todos.map(todo => (
          <ToDoListItem
            key={todo.id}
            todo={todo}
            onToggleComplete={() => toggleComplete(todo.id)}
            onRemoveTodo={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
