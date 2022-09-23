import React from "react";
import '../App.css';
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    

    
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)} className="me-2">Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
    
  );
};

export default TodoList;