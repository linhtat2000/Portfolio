import ProjectItem from "../project-item/ProjectItem";
import projects from "../../projects-data";

import "./projectList.scss";

const ProjectList = () => {
  return (
    <div className="list">
      {projects.map((project) => {
        return (
          <ProjectItem
            key={project.id}
            img={project.img}
            demo={project.demo}
            git={project.git}
            name={project.name}
            tech={project.technology}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
