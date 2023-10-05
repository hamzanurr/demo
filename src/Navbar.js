import React from 'react'
import './App.css';
import { useState } from 'react'

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <nav>
          <ul className="nav-list">
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About us</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </nav>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={toggleDarkMode}
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Toggle Dark Mode
          </label>
        </div>
      </div>
    );
  }
  
  export default Navbar;