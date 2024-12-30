import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="skill-tech-container">
      <div className="left-section">
        <h4>Skill For Lifetime!</h4>
        <h1>
          India’s No 1 Skill
          <br />
          Tech Organization!
        </h1>
        <p>
          Improving your career with uptoskills: Free training for Brighter
          Future.
        </p>
        <div className="buttons">
          <button className="view-training-btn">View Training →</button>
          <button className="book-demo-btn">Book Demo</button>
        </div>
      </div>
      <div className="right-section">
        <div className="featured-apps">
          <h3>Featured Apps</h3>
          <div className="app-list">
            <div className="app-item">
              <img src="/Courses.png" alt="Courses" />
              <div>
                <h4>Courses</h4>
                <p>Comprehensive CRM platform for customer-facing teams.</p>
              </div>
            </div>
            <div className="app-item">
              <img src="/Suitcase.png" alt="Job" />
              <div>
                <h4>Job</h4>
                <p>Secure email service for your business.</p>
              </div>
            </div>
            <div className="app-item">
              <img src="/industrial-tours.png" alt="Industrial Tours" />
              <div>
                <h4>Industrial Tours</h4>
                <p>Powerful accounting platform for growing businesses.</p>
              </div>
            </div>
            <div className="app-item">
              <img src="/degree-program.png" alt="Degree Program" />
              <div>
                <h4>Degree Program</h4>
                <p>Remote support and unattended remote access software.</p>
              </div>
            </div>
          </div>
          <a href="#" className="explore-products-link">
            Explore all products →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
