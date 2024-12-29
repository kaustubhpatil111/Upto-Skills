import React from "react";

const Login = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
