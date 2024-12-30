import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = ({ openLoginModal }) => {
  // Accept the openLoginModal function
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    {
      title: "Courses",
      description: "Explore top-notch courses.",
      path: "/courses",
    },
    {
      title: "Jobs",
      description: "Find the best job opportunities.",
      path: "/jobs",
    },
    {
      title: "Shops",
      description: "Shop exclusive resources.",
      path: "/shops",
    },
    {
      title: "Discover",
      description: "Stay updated with trends.",
      path: "/discover",
    },
    {
      title: "Degree Program",
      description: "Advance with degrees.",
      path: "/degree-program",
    },
  ];

  return (
    <header className="premium-header">
      <div className="main-nav">
        <div className="logo">
          <img src="/UptoSkills.png" alt="UptoSkills Logo" />
        </div>
        <nav className="nav-links">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${isActive(item.path) ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.path} className="nav-link">
                {item.title}
                <span className="dropdown-arrow"></span>
              </Link>
              {activeDropdown === index && (
                <div className="card-dropdown">
                  <div className="card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="action-buttons">
          <button className="corporate-btn">Candidate</button>
          <button className="corporate-btn">For Corporate</button>
          {/* This button now opens the modal instead of navigating to the login page */}
          <button className="login-btn" onClick={openLoginModal}>
            Login
          </button>
        </div>
        <div className="icons">
          <button className="search-btn">
            <img src="/search.png" alt="Search" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
