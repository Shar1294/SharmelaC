import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/project-data.json";
import ProjectCard from "../components/project-card.component";

const Projects = () => {
  return (
    <div className="row parent-div">
        <br/>      <br/>      <br/>      <br/>      <br/>      <br/>
        
      {projectsData.projects.map((project) => (
        <div className="col-sm-4">
          <Link
            className=""
            to={`/projects/${project.id}`}
            style={{ textDecoration: "none" }}
          >
            <ProjectCard project={project} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
