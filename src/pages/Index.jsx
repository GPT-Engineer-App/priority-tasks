import React, { useState } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FaPlus />
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`flex items-center justify-between py-2 px-4 border-b ${todo.completed ? "bg-green-100" : ""}`}>
            <span className={`flex-grow ${todo.completed ? "line-through text-gray-500" : ""}`}>{todo.text}</span>
            <button onClick={() => handleToggle(todo.id)} className="text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 mr-2">
              <FaCheck />
            </button>
            <button onClick={() => handleDelete(todo.id)} className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
