import React, { useState } from 'react';

function AddToDoForm({ onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    onAddTodo(newTodoText);
    setNewTodoText('');
  };

  return (
    <form 
      className="flex w-full max-w-md mx-auto mb-4 bg-gray-900 p-3 rounded-lg"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Додати нову справу..."
        className="flex-grow px-4 py-2 text-white bg-gray-800 placeholder-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 font-semibold rounded-r-md hover:bg-gray-200 transition-colors"
      >
        Додати
      </button>
    </form>
  );
}

export default AddToDoForm;
