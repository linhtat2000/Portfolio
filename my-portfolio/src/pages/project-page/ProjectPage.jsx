import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";

import ProjectList from "../../components/project-list/ProjectList";
import theme from "../../theme-btn";

import "./projectPage.scss";
import "../../global.scss";

const ProjectPage = () => {
  return (
    <div className="main project-section">
      <div className="introduction">
        <h2 className="header">My Project</h2>
        <p className="text">
          Here are some of my recent work. They are personal project to showcase
          my skill
        </p>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" className="custom-btn">
            see more
          </Button>
        </ThemeProvider>
      </div>
      <ProjectList />
    </div>
  );
};

export default ProjectPage;
