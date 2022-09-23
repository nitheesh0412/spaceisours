import React, { useState } from "react";
import "./App1.css";
import TodoForm from "./Todoform";
import TodoList from "./todolist";

const App3 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="p3" >
    <div className="App">
      <div className="container">
        <h1>Todo List App-Cyclone</h1>
        <br></br>
        <ul>
        <li>Leave early before your way to high ground or shelter gets flooded</li>
        <br></br>
        <li>Do not delay and run the risk of being marooned</li>
        <br></br>
        <li>Board up glass windows or put storm shutters in place.</li>
        </ul>
        <br></br>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
    </div>
  );
};

export default App3;