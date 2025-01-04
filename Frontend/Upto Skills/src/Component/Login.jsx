import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios
import "./Login.css";

const testimonials = [
  {
    text: "With Realto, we have been able to move to another country in 4 weeks. Incredible!",
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

const Login = ({ openRegisterModal, closeLoginModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password
  const [error, setError] = useState(""); // state for error messages

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password,
        });
        localStorage.setItem("token", response.data.token);
        closeLoginModal();
    } catch (err) {
        setError(err.response?.data?.msg || "An error occurred");
    }
};


  return (
    <div className="login-container">
      <button className="close-button" onClick={closeLoginModal}>
        ×
      </button>
      {/* Left Panel */}
      <div className="left-panel">
        <div className="brand-container">
          <img className="brand-logo" src="/UptoSkills.png" alt="UptoSkills" />
        </div>
        <h2 className="headline">
          Start your remarkable <br />
          journey with us!
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

      {/* Right Panel */}
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
          <form className="login-form" onSubmit={handleLogin}>
            {error && <div className="error-message">{error}</div>} {/* Display error */}
            <div className="input-group">
              <input
                type="email"
                placeholder="Username or Email"
                required
                aria-label="Email or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Handle email input
              />
              <span className="input-icon">📧</span>
            </div>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                aria-label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Handle password input
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

            <a href="#" className="forgot-password">
              🔒 Forgot Password?
            </a>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <button
            type="button"
            className="signup-button"
            onClick={openRegisterModal}
          >
            Don’t have an account? Sign Up
          </button>

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

export default Login;
