import { ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import illustration1 from "../../assets/img/illustration-1.png";
import illustration2 from "../../assets/img/illustration-2.png";
import illustration3 from "../../assets/img/illustration-3.png";

import btnTheme from "../../btn-theme";
import { lightTheme, darkTheme } from "../../theme";

import ProjectPage from "../project-page/ProjectPage";
import AboutPage from "../about-page/AboutPage";
import ContactPage from "../contact-page/ContactPage";

import ThemeToggle from "../../components/theme-toggle/ThemeToggle";
import "../../global.scss";
import "./homepage.scss";

const Homepage = ({ theme, toggleTheme }) => {
  return (
    <div
      className="homepage"
      style={theme === "light" ? lightTheme : darkTheme}
    >
      <div className="main">
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
            <strong
              className="bold-text"
              style={{ color: theme === "light" ? null : "#b5f4ff" }}
            >
              Frontend Developer
            </strong>{" "}
            based in Ho Chi Minh City. My goal is to bring your ideas into life!
          </p>
        </div>
        <ThemeProvider theme={btnTheme}>
          <Link to="/contact-me" className="link-item">
            <Button
              variant="contained"
              color={theme === "light" ? "primary" : "secondary"}
              className="custom-btn"
            >
              Get In Touch
            </Button>
          </Link>
        </ThemeProvider>
      </div>

      <AboutPage theme={theme} />
      <ProjectPage theme={theme} />
      <ContactPage theme={theme} />
    </div>
  );
};

export default Homepage;
