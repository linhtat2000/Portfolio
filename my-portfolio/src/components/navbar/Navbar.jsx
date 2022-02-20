import { useState } from "react";
import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

import logoLt from "../../assets/img/logo-lt.svg";
import logoDt from "../../assets/img/logo-dt.svg";
import { navbarDarkTheme } from "../../theme";

import "./navbar.scss";

const Navbar = ({ theme }) => {
  const [isClose, setIsClose] = useState(true);
  const [page, setPage] = useState("home");

  const handleChangePage = (page) => {
    setPage(page);
  };

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
          <Link
            to="/"
            className={page === "home" ? "link-item active" : "link-item"}
            onClick={() => {
              setIsClose(true);
              handleChangePage("home");
            }}
          >
            Home Page
          </Link>
          <Link
            to="/about-me"
            className={page === "about" ? "link-item active" : "link-item"}
            onClick={() => {
              setIsClose(true);
              handleChangePage("about");
            }}
          >
            About Me
          </Link>
          <Link
            to="/project"
            className={page === "project" ? "link-item active" : "link-item"}
            onClick={() => {
              setIsClose(true);
              handleChangePage("project");
            }}
          >
            My Project
          </Link>
          <Link
            to="/contact-me"
            className={page === "contact" ? "link-item active" : "link-item"}
            onClick={() => {
              setIsClose(true);
              handleChangePage("contact");
            }}
          >
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
              href="https://replit.com/@linhtat2000"
              target="_blank"
              rel="noreferrer"
            >
              <span
                class="iconify social-link"
                data-icon="simple-icons:replit"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/linh-tat-612b62225/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="social-link" />
            </a>
            {/* <a
              href="https://app.netlify.com/teams/xiaoling2000/overview"
              target="_blank"
              rel="noreferrer"
            >
              <span class="iconify social-link" data-icon="bxl:netlify"></span>
            </a> */}
            <a
              href="https://github.com/linhtat2000"
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
