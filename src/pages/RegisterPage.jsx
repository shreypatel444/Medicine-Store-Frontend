import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../style/RegisterPage.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.email || !formData.password || !formData.name || !formData.address) {
      toast.error("⚠️ Please fill in all fields!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
  
    try {
      const response = await fetch("https://medicine-store-backend.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // Correct way to parse JSON response
  
      if (response.ok) {
        localStorage.setItem("token", data.token); // Store token if request is successful
  
        toast.success("🎉 Registered successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
  
        setTimeout(() => {
          navigate("/");
        }, 2000);
  
        setFormData({ name: "", email: "", password: "", address: "" });
      } else {
        toast.error(data.message || "❌ Something went wrong!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Server error! Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };
  

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="auth-input"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            className="auth-input auth-textarea"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
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
            Register
          </button>
        </form>
        <p className="auth-toggle-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="auth-toggle-link">
            Login
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
