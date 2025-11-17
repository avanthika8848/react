import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">My Website</div>

      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "menu active" : "menu"}>
        <li>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
