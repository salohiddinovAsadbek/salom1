import React from "react";
import "../assets/navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../images/mainLogo.svg";
import search from "../images/search.svg";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Interno</h1>
        </div>
        <div className="links">
          <NavLink>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink>Project</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <img src={search} alt="search" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
