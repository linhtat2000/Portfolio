import SensorsIcon from "@mui/icons-material/Sensors";
import GitHubIcon from "@mui/icons-material/GitHub";
import Technology from "../technology/Technology";

import "./projectItem.scss";

const ProjectItem = ({ img, demo, git, name, tech }) => {
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
          <a href={demo} target="_blank" rel="noreferrer">
            <SensorsIcon className="view-icon" />
          </a>
          <a href={git} target="_blank" rel="noreferrer">
            <GitHubIcon className="view-icon" />
          </a>
        </div>
      </div>
      <div className="title">{name}</div>
    </div>
  );
};

export default ProjectItem;
