import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import Student from "./Component/Student";
import Admin from "./Component/Admin";
import Register from "./Component/Register";
import Login from "./Component/Login";
import "./App.css";
function App() {
  return (
    <Router>
      
        <div className="home">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/admin" className="link">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/student" className="link">
                Student
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/student" element={<Student />}></Route>
        </Routes>
      
    </Router>
  );
}

export default App;
