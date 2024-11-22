import { useState, useEffect } from "react";
import "./Header.style.css";
import { Link, useLocation } from "react-router-dom";

function ActiveLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={isActive ? "active link" : "link"}>
      {children}
    </Link>
  );
}

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [Theme, setTheme] = useState("Light");
  useEffect(() => {
    if (Theme === "Dark") {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "Dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "Light");
    }
    return () => {
      document.body.classList.remove("dark-theme");
    };
  }, [Theme]);
  function toggleTheme() {
    if (Theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  }

  return (
    <header className="header">
      <nav className="nav max-md:mx-6">
        <Link to="/">
          <img src="image/logo.png" alt="logo" className="logo" />
        </Link>

        <div className={showMenu ? "show menu" : "menu"} id="nav-menu">
          <ul className="list">
            <ActiveLink to="/">
              <i className="uil uil-estate"></i> Home
            </ActiveLink>
            <ActiveLink to="/predictor">
              <i className="uil uil-search"></i> Predictor
            </ActiveLink>
            <ActiveLink to="/insights">
              <i className="uil uil-graph-bar"></i> Insights
            </ActiveLink>
            <ActiveLink to="/dashboard">
              <i className="uil uil-message"></i> Dashboard
            </ActiveLink>
          </ul>
          <i
            className="uil uil-times close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>
        <div className="flex items-center">
          <i
            className={`uil change-theme ${
              Theme === "Dark" ? "uil-sun" : "uil-moon"
            }`}
            onClick={toggleTheme}
          ></i>
          <div className="toggle" onClick={() => setShowMenu(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
