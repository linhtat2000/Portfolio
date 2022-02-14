import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import logoLt from "../../assets/logo-lt.svg";
import logoDt from "../../assets/logo-dt.svg";
import { navbarDarkTheme } from "../../theme";

import "./navbar.scss";

const Navbar = ({ theme }) => {
  const [isClose, setIsClose] = useState(false);

  return (
    <>
      <nav
        className={isClose === true ? "navbar close" : "navbar"}
        style={theme === "light" ? null : navbarDarkTheme}
      >
        <div className="top">
          <img
            src={theme === "light" ? logoLt : logoDt}
            alt="logo"
            className="logo"
          />
          <div className="name">Linh Tat</div>
          <div className="ocupation">Frontend Developer</div>
        </div>
        <div className={theme === "light" ? "center" : "center dark-theme"}>
          <Link to="/" className="link-item">
            Home Page
          </Link>
          <Link to="/about-me" className="link-item">
            About Me
          </Link>
          <Link to="/project" className="link-item">
            My Project
          </Link>
          <Link to="/contact-me" className="link-item">
            Contact Me
          </Link>
        </div>
        <div className="bottom">
          <div
            className={
              theme === "light" ? "social-links" : "social-links dark-theme"
            }
          >
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
      <MenuIcon
        className={theme === "light" ? "mobile-nav" : "mobile-nav dark-theme"}
        onClick={() => {
          setIsClose(!isClose);
        }}
      />
    </>
  );
};

export default Navbar;
