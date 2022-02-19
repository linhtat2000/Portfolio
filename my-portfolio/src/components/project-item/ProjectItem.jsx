import SensorsIcon from "@mui/icons-material/Sensors";
import GitHubIcon from "@mui/icons-material/GitHub";
import Technology from "../technology/Technology";

import "./projectItem.scss";
import { requirePropFactory } from "@mui/material";

const ProjectItem = ({ img, link, name, tech }) => {
  return (
    <div className="container">
      <div className="thumbnail">
        <img
          src={require("../../assets/project-thumbnail/" + img)}
          alt={`${name}'s thumbnail`}
        />
        <div className="technique">
          {tech.map((item, index) => {
            return <Technology key={index} item={item} />;
          })}
        </div>
        <div className="view-project">
          <SensorsIcon className="view-icon" />
          <GitHubIcon className="view-icon" />
        </div>
      </div>
      <div className="title">{name}</div>
    </div>
  );
};

export default ProjectItem;
