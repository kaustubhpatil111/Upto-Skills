import React from "react";

const Login = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#dff8f5",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#00b289",
            color: "white",
            padding: "40px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Welcome Back!
          </h1>
          <p style={{ fontSize: "1rem", marginBottom: "40px" }}>
            Log in to continue your journey with UptoSkills and access all our
            features.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#f5f9fc",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "20px",
              color: "#ff7849",
            }}
          >
            Login
          </h2>
          <form>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="email"
                placeholder="Email"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#ffffff",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                placeholder="Password"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#ffffff",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#ff7849",
                color: "white",
                border: "none",
                padding: "12px",
                width: "100%",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Login
            </button>
          </form>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "12px",
              borderRadius: "5px",
              width: "100%",
              height: "auto",
              marginTop: "15px",
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#333",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p>
              Don't have an account?{" "}
              <a href="#" style={{ color: "#e66e3f" }}>
                Register
              </a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                flex: 1,
                margin: "0 5px",
                background: "none",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              Sign in with Google
            </button>
            <button
              style={{
                flex: 1,
                margin: "0 5px",
                background: "none",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              Sign in with Instagram
            </button>
            <button
              style={{
                flex: 1,
                margin: "0 5px",
                background: "none",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              Sign in with LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
