import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../style/Loginpage.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("⚠️ Please fill in all fields!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      const token = response.data.token; // Get the token from the response
      localStorage.setItem("token", token);

      if (response.status === 200) {
        toast.success("✅ Logged in successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      setFormData({ email: "", password: "" });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("❌ Invalid email or password!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        setFormData({ email: "", password: "" });
      } else {
        toast.error("❌ Server error! Please try again later.", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        setFormData({ email: "", password: "" });
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="auth-toggle-text">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="auth-toggle-link"
          >
            Sign Up
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
