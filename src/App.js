
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
import Help from "./components/Help";
import About from "./components/About";
import Todoform from "./components/todoform";
import Todolist from "./components/todolist";
function App() {
  return (
    <div>
      <div>
        <h1 class="style">Canopener</h1>
        <>
        <nav className="navbar navbar-expand-lg mx-auto">
    <div className="container-fluid ">
     
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
            <Route path="/todolist" element={<Todolist />} />
            <Route path="/todoform" element={<Todoform />} />
          </Routes>
          </div>


    </div>
  );
}

export default App;
