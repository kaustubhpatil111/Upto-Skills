import React from "react";

const Register = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Register Page</h1>
      <form>
        <div>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
