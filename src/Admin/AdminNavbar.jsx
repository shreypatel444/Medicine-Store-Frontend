import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/AdminNavbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-admin">
      <div className="logo">
        <NavLink to="/adminpharma" className="logo-link">
          <span>Admin Panel</span>
        </NavLink>
      </div>
      <ul className={`nav-links-admin ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/adminpharma/products"
            className="nav-item-admin"
            activeClassName="active"
            exact
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adminpharma/addnewproducts"
            className="nav-item-admin"
            activeClassName="active"
            exact
          >
            New Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adminpharma/userdata"
            className="nav-item-admin"
            activeClassName="active"
            exact
          >
            User Data
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adminpharma/contactdata"
            className="nav-item-admin"
            activeClassName="active"
            exact
          >
            Contact Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="nav-item-admin"
            activeClassName="active"
            exact
          >
            Home
          </NavLink>
        </li>
      </ul>
      <div className="hamburger-admin" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
