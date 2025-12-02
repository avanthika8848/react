import React from "react";
import projects from "./data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
