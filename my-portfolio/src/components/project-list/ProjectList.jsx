import React from "react";
import ProjectItem from "../project-item/ProjectItem";
import "./projectList.scss";

const ProjectList = () => {
  return (
    <div className="list">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default ProjectList;
