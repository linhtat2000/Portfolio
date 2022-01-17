import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

import illustration1 from "../../assets/illustration-1.png";
import illustration2 from "../../assets/illustration-2.png";
import illustration3 from "../../assets/illustration-3.png";

import theme from "../../theme-btn";
import "../../global.scss";
import "./homepage.scss";
import ProjectPage from "../project-page/ProjectPage";
import AboutPage from "../about-page/AboutPage";
import ContactPage from "../about-page/AboutPage";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="main">
        <div className="hero-img">
          <img src={illustration1} alt="hero background" />
        </div>
        <div className="theme-toggle">toggle</div>
        <div className="intro">
          <h1 className="header">
            Hello World!
            <br />
            My name is Linh
          </h1>
          <p className="text">
            I’m a fresher{" "}
            <strong className="bold-text">Frontend Developer</strong> based in
            Ho Chi Minh City. My goal is to bring your ideas into life!
          </p>
        </div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" className="custom-btn">
            get in touch
          </Button>
        </ThemeProvider>
      </div>

      <ProjectPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
};

export default Homepage;
