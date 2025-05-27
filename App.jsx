import { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="App">
      <button className="toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1 className="title">Hello, Theme Toggle!</h1>
      <div className="box">This is a styled content box.</div>
    </div>
  );
}

export default App;
