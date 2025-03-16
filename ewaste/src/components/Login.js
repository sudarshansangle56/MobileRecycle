import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role as user
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
        role,
      });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      navigate(role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="accc">
      <div className="imgre">
        <img src="Loginimg.jpg" alt="Login" />
      </div>
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h2>Welcome, {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className=" h-20 w-80"
              style={{ height: "7%", width: "80%", borderRadius: "5px" }}
            >
              <option
                value="user"
                style={{ backgroundColor: "#f8f9fa", color: "#000" }}
              >
                User
              </option>
              <option
                value="admin"
                style={{ backgroundColor: "#f8f9fa", color: "#000" }}
              >
                Admin
              </option>
            </select>

            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit">Login</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
