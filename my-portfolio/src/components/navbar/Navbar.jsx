import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="name">Linh Tat</div>
        <div className="ocupation">Frontend Developer</div>
      </div>
      <div className="center">
        <Link to="/" className="link-item">
          Home Page
        </Link>
        <Link to="/project" className="link-item">
          My Project
        </Link>
        <Link to="/aboutme" className="link-item">
          About Me
        </Link>
        <a href="#contact" className="link-item">
          Contact Me
        </a>
      </div>
      <div className="bottom">
        <div className="social-links">
          <a
            href="https://www.instagram.com/todayis_meow/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="social-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/linh-tat-612b62225/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="social-link" />
          </a>
          <a href="facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon className="social-link" />
          </a>
          <a
            href="https://github.com/xiaoling2000"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="social-link" />
          </a>
        </div>
        <div className="copyrights">2022 © All rights reserved</div>
      </div>
    </nav>
  );
};

export default Navbar;
