import { ThemeProvider } from "@emotion/react";
import React from "react";

import { Link } from "react-router-dom";
import btnTheme from "../../btn-theme";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import portrait from "../../assets/portrait.JPG";
import "./aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="main about-section">
      <h2 className="header">Me, Myself and I</h2>
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
            <strong className="bold-text">I’m available for hiring</strong> that
            I’ll be delighted to hear from you.
          </p>
          <ThemeProvider theme={btnTheme}>
            <Button variant="contained" color="primary" className="custom-btn">
              <Link
                to="../../../public/files/Tat-Tieu-Linh-Resume.pdf"
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
    </div>
  );
};

export default AboutPage;
