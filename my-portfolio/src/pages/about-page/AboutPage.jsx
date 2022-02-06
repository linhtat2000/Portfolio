import { ThemeProvider } from "@emotion/react";
import React from "react";

import theme from "../../theme-btn";
import { Button } from "@mui/material";
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
            Currently, I’m available for hiring that I’ll be delighted to hear
            from you.
          </p>
          <div className="about-btns">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                className="custom-btn"
              >
                download resume
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="custom-btn"
              >
                more about me
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <div className="right">
          <img src={portrait} alt="Linh's portrait" className="portrait" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
