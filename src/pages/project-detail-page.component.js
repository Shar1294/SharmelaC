import React from "react";
import { useParams } from "react-router-dom";
import Tags from "../components/tags.component";
import "../css/project-detail.css";

import projectsData from "../data/project-data.json";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projectsData.projects[id];

  return (
    <div className="top-spacing parent-div">
      <div className="project-detail-heading-line">
        <div className="project-card-heading">{project.heading}</div>
        <div> {project.date}</div>
      </div>

      <p className="project-card-sub-heading">{project.subheading}</p>

      <Tags tags={project.tags} />
      <img
        className="project-detail-img"
        src={project.image}
        alt="Card image cap"
      />

      <p>{project.content}</p>
    </div>
  );
};

export default ProjectDetail;
