import React from 'react';

function ToDoListItem({ todo, onToggleComplete, onRemoveTodo }) {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-900 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={onToggleComplete}
          className="w-5 h-5 text-black bg-white rounded focus:ring-2 focus:ring-white"
        />
        <span className={`text-white ${todo.completed ? 'opacity-50' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 font-semibold"
        onClick={onRemoveTodo}
      >
        Видалити
      </button>
    </li>
  );
}

export default ToDoListItem;
