import React from "react";
import "./StatisticsSection.css";

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      {/* Gradient background */}
      <div className="blurredSpot spot1"></div>
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

          <hr />
        </div>
        <div className="stat-item">
          <h2 className="stat-number">147</h2>
          <div className="underline"></div>
          <p className="stat-label">Skill Tutor</p>

          <hr />
        </div>
        <div className="stat-item">
          <h2 className="stat-number">9k+</h2>
          <div className="underline"></div>
          <p className="stat-label">Online Training</p>

          <hr />
        </div>
        <div className="stat-item">
          <h2 className="stat-number">23k+</h2>
          <div className="underline"></div>
          <p className="stat-label">People Worldwide</p>

          <hr />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
