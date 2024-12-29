import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/Linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/Instagram.png" alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/Facebook.png" alt="Facebook" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="/Youtube.png" alt="YouTube" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <img src="/Telegram.png" alt="Telegram" />
          </a>
        </div>
        <div className="action-buttons">
          <button className="green-btn">Get a Job</button>
          <button className="orange-btn">Post a Job</button>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav">
        <div className="logo">
          <img src="/UptoSkills.png" alt="UptoSkills Logo" />
        </div>
        <nav className="nav-links">
          <Link to="/courses" className="active">
            Courses
          </Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/shops">Shops</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/degree-program">Degree Program</Link>
        </nav>
        <div className="action-buttons">
          <button className="green-btn">For Colleges</button>
          <button className="orange-btn-transperant">Need Help?</button>
        </div>
        <div className="icons">
          <button>
            <img src="/Cart.png" alt="Cart" />
          </button>
          <button>
            <img src="/search.png" alt="Search" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
