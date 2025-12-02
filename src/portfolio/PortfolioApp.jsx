import React from "react";
import "./portfolio.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const PortfolioApp = () => {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="portfolio-footer">© {new Date().getFullYear()} Your Name</footer>
    </div>
  );
};

export default PortfolioApp;
