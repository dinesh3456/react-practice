import React, { useState, useEffect } from "react";

export default function NavBar() {
  // State to track the current mode (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update the body background color based on the mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  // Dynamically set the navbar color based on the mode
  const navbarClass = `navbar navbar-expand-lg ${
    isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
  }`;

  // Dynamically set the text color based on the mode
  const brandClass = `navbar-brand ${isDarkMode ? "text-light" : "text-dark"}`;

  return (
    <div>
      <nav className={navbarClass}>
      <div className="container-fluid">
          <a className={brandClass} href="/">
            React app
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          Dark Mode
        </label>
        </div>
      </div>
        </nav>
      </div>
      

  );
}
