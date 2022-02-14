import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import illustration1 from "../../assets/illustration-1.png";
import illustration2 from "../../assets/Illustration-2.svg";
import illustration3 from "../../assets/illustration-3.png";

import btnTheme from "../../btn-theme";
import { lightTheme, darkTheme } from "../../theme";

import ProjectPage from "../project-page/ProjectPage";
import AboutPage from "../about-page/AboutPage";
import ContactPage from "../contact-page/ContactPage";

import "../../global.scss";
import "./homepage.scss";
import ThemeToggle from "../../components/theme-toggle/ThemeToggle";

const Homepage = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      console.log("Dark theme");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      console.log("light theme");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <>
      <div className="homepage">
        <div className="main">
          {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
          <div className="hero-img">
            <img src={illustration2} alt="hero background" />
          </div>
          <div className="theme-toggle" onClick={toggleTheme}>
            <ThemeToggle theme={theme} />
          </div>
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
          {/* </ThemeProvider> */}
          <ThemeProvider theme={btnTheme}>
            <Link to="/contact-me" className="link-item">
              <Button
                variant="contained"
                color="primary"
                className="custom-btn"
              >
                Get In Touch
              </Button>
            </Link>
          </ThemeProvider>
        </div>

        <AboutPage />
        <ProjectPage />
        <ContactPage />
      </div>
    </>
  );
};

export default Homepage;
