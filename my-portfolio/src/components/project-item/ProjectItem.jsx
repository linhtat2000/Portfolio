import React from "react";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

import theme from "../../components/button/theme";
import "./projectItem.scss";

const ProjectItem = () => {
  return (
    <div className="container">
      <div className="thumbnail">
        <img
          src="https://4.bp.blogspot.com/-5prgkINShq8/XwOeaSvk-ZI/AAAAAAAACP0/OrDecE6xQ5AG1acwoURcjIcgGFdwj7x1ACLcBGAsYHQ/w640-h427/web-design-landing-page-template_52683-18357.jpg"
          alt="project's thumbnail"
        />
        <div className="buttons">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" className="button">
              view demo
            </Button>
            <Button variant="contained" color="primary" className="button">
              view detail
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className="title">Project #01</div>
    </div>
  );
};

export default ProjectItem;
