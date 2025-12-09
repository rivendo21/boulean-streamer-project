import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://boulean.net/assets/images/boulean_logo_428x112.png"
          alt="Boulean Logo"
          className="logo"
        />
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#todo">To-Do</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
        <a href="#games">Games</a>
        <a href="#music">Music</a>
        <a href="#staff">Staff</a>
      </div>
    </nav>
  );
};

export default Navbar;
