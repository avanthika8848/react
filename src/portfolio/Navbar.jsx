import React from "react";

const Navbar = () => {
  return (
    <header className="portfolio-nav">
      <div className="nav-inner">
        <div className="brand">MyPortfolio</div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
