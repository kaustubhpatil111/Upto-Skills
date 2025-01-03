import React from "react";
import mainImage from "../assets/Image/img1.png";
import imagelogo2 from "../assets/Image/img2.png";
import imagelogo3 from "../assets/Image/img3.png";
import imagelogo4 from "../assets/Image/img4.png";
import "./CourseSection.css"; // Import the CSS file

const CourseSection = () => {
  return (
    <section className="course-section">
      <div className="course-section-content">
        <p className="course-section-tag">Never stop learning</p>
        <h1 className="course-section-title">
          Grow up your skills by online courses with Onlearning
        </h1>
        <button className="course-section-button">VIEW COURSES</button>
        <div className="course-section-review">
          <div className="course-section-review-images">
            <img src={imagelogo2} alt="Profile 1" className="profile-image" />
            <img src={imagelogo3} alt="Profile 2" className="profile-image" />
            <img src={imagelogo4} alt="Profile 3" className="profile-image" />
          </div>
          <p className="course-section-review-text">(10k+ Reviews)</p>
        </div>
      </div>

      <div className="course-section-image">
        <img src={mainImage} alt="Hero Image" />
      </div>
    </section>
  );
};

export default CourseSection;
