import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">{project.tech.join(" • ")}</div>
        <div className="project-links">
          <a href={project.link} target="_blank" rel="noreferrer">Live</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
