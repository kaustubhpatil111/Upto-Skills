import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import JobsContent from "./Jobs-Content";

const NavigationBar = ({ openLoginModal }) => {
  // Accept the openLoginModal function
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="premium-header">
      <div className="main-nav">
        <div className="logo">
          <img src="/UptoSkills.png" alt="UptoSkills Logo" />
        </div>
        <nav className="nav-links">
          {/* Courses Nav Item */}
          <div
            className={`nav-item ${isActive("/courses") ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/courses" className="nav-link">
              Learn & Earn
              <span className="dropdown-arrow"></span>
            </Link>
            {activeDropdown === 0 && (
              <div className="card-dropdown">
                <div className="card" id="Courses-Content">
                  Learn & Earn
                </div>
              </div>
            )}
          </div>

          {/* Jobs Nav Item */}
          <div
            className={`nav-item ${isActive("/jobs") ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/jobs" className="nav-link">
              Jobs
              <span className="dropdown-arrow"></span>
            </Link>
            {activeDropdown === 1 && (
              <div className="card-dropdown">
                <div id="Jobs-Content">
                  <JobsContent />
                </div>
              </div>
            )}
          </div>

          {/* Discover Nav Item */}
          <div
            className={`nav-item ${isActive("/discover") ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/discover" className="nav-link">
              Internships
              <span className="dropdown-arrow"></span>
            </Link>
            {activeDropdown === 3 && (
              <div className="card-dropdown">
                <div id="Discover Content" className="card"></div>
              </div>
            )}
          </div>

          {/* Degree Program Nav Item */}
          <div
            className={`nav-item ${
              isActive("/degree-program") ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/degree-program" className="nav-link">
              Discover {/*degree program*/}
              <span className="dropdown-arrow"></span>
            </Link>
            {activeDropdown === 4 && (
              <div className="card-dropdown">
                <div id="Degree Program Content" className="card"></div>
              </div>
            )}
          </div>
        </nav>

        <div className="action-buttons">
          <button className="corporate-btn">For Enterprise</button>
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
