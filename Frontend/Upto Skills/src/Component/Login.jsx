import React, { useState, useEffect } from "react";
import "./Login.css";

const testimonials = [
  {
    text: "With Realto we have been able to move to another country in 4 weeks. Incredible!",
    author: "- Eliska Trebalska",
  },
  {
    text: "First touch with Realto has been amazing; the platform works effortlessly and delivers results.",
    author: "- Jurek Jakowski",
  },
  {
    text: "Realto made our dreams come true; highly recommend to anyone looking for seamless service.",
    author: "- Alex Doe",
  },
];

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="brand-container">
          <img className="brand-logo" src="/UptoSkills.png" alt="UptoSkills" />
        </div>
        <h2 className="headline">
          Start your remarkable <br />
          journey with us!
        </h2>
        <p className="intro-text">
          Our cold email automation helps you send personalized cold emails at
          scale with high email deliverability.
        </p>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <p>{testimonial.text}</p>
              <span>{testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="right-panel">
        <div className="login-form-container">
          <div className="welcome-container">
            <img className="hand-icon" src="hand-icon.png" alt="Hand icon" />
            <h2>Welcome Back</h2>
          </div>

          <p className="login-description">
            Empower your experience, sign up for a free account today
          </p>
          <form className="login-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="signup-link">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>

          <div className="social-login">
            <p>Or Continue With</p>
            <div className="social-buttons">
              <button id="google">
                <img src="/google.png" alt="Google" /> Google
              </button>
              <button id="instagram">
                <img src="/Instagram.png" alt="Instagram" /> Instagram
              </button>
              <button id="linkedin">
                <img src="/Linkedin.png" alt="LinkedIn" /> LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
