import React, { useState, useEffect } from "react";

export default function NavBar() {
  // State to track the current mode (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to track the selected background color
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setSelectedColor(null); // Reset selected color when toggling dark mode
  };

  // Function to handle background color change
  const handleColorChange = (color) => {
    if (selectedColor === color) {
      // Deselect the color if it's already selected
      setSelectedColor(null);
    } else {
      // Select the color
      setSelectedColor(color);
      setIsDarkMode(false); // Reset dark mode when changing background color
    }
  };

  // Update the body background color based on the mode and selected color
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.style.backgroundColor = selectedColor || "";
  }, [isDarkMode, selectedColor]);

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
            <div className="form-check form-switch mx-2">
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
            {["red", "blue", "yellow", "green"].map((color) => (
              <div key={color} className="form-check form-switch mx-2" >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`${color}Switch`}
                  checked={selectedColor === color}
                  onChange={() => handleColorChange(color)}
                />
                <label className="form-check-label" htmlFor={`${color}Switch`}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
