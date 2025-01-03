import React, { useState, useEffect } from "react";
import "./Register.css";

const testimonials = [
  {
    text: "Realto's user-friendly interface made the process of relocating a breeze.",
    author: "- Emily Smith",
  },
  {
    text: "From start to finish, the registration process was seamless. Highly recommend!",
    author: "- John Doe",
  },
  {
    text: "I never thought it would be this easy to get started with Realto. Exceptional service!",
    author: "- Anna Lee",
  },
];

const Register = ({ closeRegisterModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Automatically switch to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="login-container">
      <button className="close-button" onClick={closeRegisterModal}>
        ×
      </button>
      <div className="left-panel">
        <div className="brand-logo">
          <img src="/UptoSkills.png" alt="UptoSkills" />
        </div>
        <h2 className="headline">
          Join us and start your <br />
          exciting journey!
        </h2>

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

          {/* Login Form */}
          <form className="login-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                required
                aria-label="Email or Username"
              />
              <input
                type="username"
                placeholder="Username"
                required
                aria-label="Username"
              />
            </div>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                aria-label="Password"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                aria-label="Password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? "🐵" : "🙈"}
              </button>
            </div>

            <button type="submit" className="login-button">
              Register
            </button>
          </form>

          <div className="social-login">
            <p>Or Continue With</p>
            <div className="social-buttons">
              <button id="google" aria-label="Continue with Google">
                <img src="/google.png" alt="Google" />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
