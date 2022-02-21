import { useEffect, useRef } from "react";
import { init } from "ityped";
import ProjectList from "../../components/project-list/ProjectList";

import { lightTheme, darkTheme } from "../../theme";

import "./projectPage.scss";
import "../../global.scss";

const ProjectPage = ({ theme }) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 30,
      strings: ["What I have done"],
    });
  }, []);

  return (
    <div
      className="main project-section"
      style={theme === "light" ? lightTheme : darkTheme}
    >
      <div className="introduction">
        <h2 className="header">
          <span ref={textRef}></span>
        </h2>
        <p className="text">
          Here are some of my recent work. They are personal projects to
          showcase my skill.
        </p>
      </div>
      <ProjectList />
    </div>
  );
};

export default ProjectPage;
