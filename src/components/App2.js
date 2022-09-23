import React, { useState } from "react";
import "./App1.css";
import TodoForm from "./Todoform";
import TodoList from "./todolist";

const App2 = () => {
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
    <div className="p2 ">
      <div >
        
      </div>
    <div className="App">
      <div className="container">
        <h1>Todo List App-Tsunami</h1>
        <br></br>
        <ul>
        <li>Stay away from the beach.</li>
        <br></br>
        <li>Move inland to higher ground immediately and stay there.</li>
        <br></br>
        <li>If you are in dangerous area, immediately turn all the water gas and electricity and quickly move to a higher ground.</li>
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

export default App2;