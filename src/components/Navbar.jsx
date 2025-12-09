import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="boulean.png" alt="Boulean Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink href="/staff">Staff</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
