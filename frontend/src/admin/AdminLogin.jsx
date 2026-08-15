import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/admin/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="admin-login-page">

      <div className="login-card">

        <h1>Admin Login</h1>

        <p>Smart Campus Complaint Management System</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit"
          classname="login-button">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;