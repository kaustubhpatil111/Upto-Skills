import React from "react";
import "./StatisticsSection.css";

const StatisticsSection = () => {
  return (
    <div>
      <img src="/Waves.png" alt="waves" />
      <img src="/Waves.png" alt="waves" />
      <section className="statistics-section">
        {/* Gradient background */}
        <div className="background-layer"></div>

        {/* Map image */}
        <div className="map-layer">
          <img src="/world-map.png" alt="World Map" className="map-image" />
        </div>

        {/* Stats overlay */}
        <div className="stats-container">
          <div className="stat-item">
            <h2 className="stat-number">549</h2>
            <div className="underline"></div>
            <p className="stat-label">Creative Events</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">147</h2>
            <div className="underline"></div>
            <p className="stat-label">Skill Tutor</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">9k+</h2>
            <div className="underline"></div>
            <p className="stat-label">Online Training</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">23k+</h2>
            <div className="underline"></div>
            <p className="stat-label">People Worldwide</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatisticsSection;
