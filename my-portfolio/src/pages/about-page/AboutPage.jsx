import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { lightTheme, darkTheme } from "../../theme";
import btnTheme from "../../btn-theme";

import portrait from "../../assets/img/portrait.JPG";
import skillbg from "../../assets/img/skills.svg";
import ai from "../../assets/img/ai-ball.svg";
import figma from "../../assets/img/figma-ball.svg";
import vscode from "../../assets/img/vscode-ball.svg";
import "./aboutPage.scss";

const AboutPage = ({ theme }) => {
  return (
    <div
      className="main about-section"
      style={theme === "light" ? lightTheme : darkTheme}
    >
      <h2 className="header">Me, myself and I</h2>
      <div className="info">
        <div className="left">
          <p className="text">
            Welcome to my portolio website! My name is Tat Tieu Linh but you can
            call me Linh for short. Building beautiful UI with great UX website
            is one of my main goal on the road to become a professional Frontend
            Developer.
          </p>
          <p className="text">
            Currently,{" "}
            <strong
              className="bold-text"
              style={{ color: theme === "light" ? null : "#b5f4ff" }}
            >
              I’m available for hiring
            </strong>{" "}
            that I’ll be delighted to hear from you.
          </p>
          <ThemeProvider theme={btnTheme}>
            <Button
              variant="contained"
              color={theme === "light" ? "primary" : "secondary"}
              className="custom-btn"
            >
              <Link
                to="https://github.com/linhtat2000/Portfolio/raw/main/TAT_TIEU_LINH_Resume.pdf"
                target="_blank"
                download
                className="download-file"
              >
                <FileDownloadIcon className="download-icon" />
                Resume
              </Link>
            </Button>
          </ThemeProvider>
        </div>
        <div className="right">
          <img src={portrait} alt="Linh's portrait" className="portrait" />
        </div>
      </div>
      <div className="skill-set">
        <img src={skillbg} alt="my skill set" className="skill-bg" />
        <div className="skills">
          <img src={ai} alt="be able to use Illustrator" className="skill ai" />
          <img
            src={vscode}
            alt="be able to use VSCode"
            className="skill vscode"
          />
          <img src={figma} alt="be able to use Figma" className="skill figma" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
