import React from "react";
import "../styles/project-card.css";
import Tags from "./tags.component";

const ProjectCard = ({ project }) => {
  return (
    <div className="spacing">
      <div className="card project-card-container">
        <img className="" src={project.image} alt="Card image cap" />

        <div className="project-card-text-container">
          <div className="project-card-heading">{project.heading}</div>

          <p className="project-card-sub-heading">{project.subheading}</p>

          <Tags tags={project.tags}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
