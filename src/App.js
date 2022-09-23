import React, { useState } from "react";
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
//import {Routes, Route, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
import Help from "./components/Help";
import About from "./components/About";
import TodoForm from "./components/Todoform";
import TodoList from "./components/todolist";
import App1 from "./components/App1";
import "./App.css";
import img from '../src/assets/img.png';

function App() {
  
  return (
    <div className="P2">
      
      <div>
        <>
        <nav className="navbar navbar-expand-lg  " >
      <div className="container-fluid bg-light bg-dark">
        
      <a class="navbar-brand text-light" href="Home"><img src={img} alt="" width="100px" /> Can Opener</a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item me-3">
            <Link className="nav-link active text-light"to="Home">Home</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link text-light" to="help">help desk</Link>
          </li>
          <li className="nav-item me-3 ">
            <Link className="nav-link text-light" to="aboutus">Aboutus</Link>
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
           
          </Routes>
          </div>
       
      
    </div>
  );
}

export default App;