import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Example login validation
    if (
      formData.username === "admin" &&
      formData.password === "1234"
    ) {
      // Store login data
      localStorage.setItem("token", "mytoken123");
      localStorage.setItem("user", formData.username);

      // Redirect to dashboard
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;