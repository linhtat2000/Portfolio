import React from "react";

import SensorsIcon from "@mui/icons-material/Sensors";
import GitHubIcon from "@mui/icons-material/GitHub";
import Technology from "../technology/Technology";
import "./projectItem.scss";

const ProjectItem = () => {
  return (
    <div className="container">
      <div className="thumbnail">
        <img
          src="https://4.bp.blogspot.com/-5prgkINShq8/XwOeaSvk-ZI/AAAAAAAACP0/OrDecE6xQ5AG1acwoURcjIcgGFdwj7x1ACLcBGAsYHQ/w640-h427/web-design-landing-page-template_52683-18357.jpg"
          alt="project's thumbnail"
        />
        <div className="technique">
          <Technology />
          <Technology />
          <Technology />
        </div>
        <div className="view-project">
          <SensorsIcon className="view-icon" />
          <GitHubIcon className="view-icon" />
        </div>
      </div>
      <div className="title">Project #01</div>
    </div>
  );
};

export default ProjectItem;
