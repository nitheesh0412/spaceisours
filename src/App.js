import React, { useState } from "react";
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
//import {Routes, Route, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
import Help from "./components/Help";
import About from "./components/About";
import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";
import App1 from "./components/App1";
import App2 from "./components/App2";
function App() {
  
  return (
    <div>
      <div>
        <>
        <nav className="navbar navbar-expand-lg mx-auto">
      <div className="container-fluid style ">
      <h1 class="">Canopener</h1>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item me-3">
            <Link className="nav-link active text-info"to="Home">Home</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link text-info" to="help">help desk</Link>
          </li>
          <li className="nav-item me-3 ">
            <Link className="nav-link text-info" to="aboutus">Aboutus</Link>
          </li>
        </ul>
      </div>
      
    </div>
     </nav>
    
      </>
    
      <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/Home" element={< Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/todoform" element={<TodoForm />} />
            <Route path="/App1" element={<App1 />} />
            <Route path="/App2" element={<App2 />} />
          </Routes>
          </div>
       
      
    </div>
  );
}

export default App;