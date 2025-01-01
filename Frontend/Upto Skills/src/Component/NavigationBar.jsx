import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import JobsContent from "./naviagatio bar content/Jobs-Content";
import Discove_Conent from "./naviagatio bar content/Discover_Content";
import Internship_content from "./naviagatio bar content/Internship_content";
import Learn_Earn from "./naviagatio bar content/Learn_Earn";
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
                <div id="Courses-Content">
                  <Learn_Earn />
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

          {/* InternShip Nav Item */}
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
                <div id="Internship">
                  <Internship_content />
                </div>
              </div>
            )}
          </div>

          {/* Discover Nav Item */}
          <div
            className={`nav-item ${
              isActive("/degree-program") ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/degree-program" className="nav-link">
              Discover {/*Discover program*/}
              <span className="dropdown-arrow"></span>
            </Link>
            {activeDropdown === 4 && (
              <div className="card-dropdown">
                <div id="Degree Program Content">
                  <Discove_Conent />
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="icons">
          <input type="text" className="search-input" placeholder="Search..." />
          <img src="/search.png" alt="Search Icon" className="search-icon" />
        </div>

        <div className="action-buttons">
          <button className="login-btn" onClick={openLoginModal}>
            Login
          </button>
          <button className="corporate-btn">For Enterprise</button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
