import React from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { toggleDarkTheme, toggleBtnDarkTheme } from "../../theme";
import "./themeToggle.scss";

const ThemeToggle = ({ theme }) => {
  return (
    <div className="toggle" style={theme === "light" ? null : toggleDarkTheme}>
      <LightModeIcon className="toggle-icon" />
      <DarkModeIcon className="toggle-icon" />
      <div
        className="toggle-button"
        style={theme === "light" ? null : toggleBtnDarkTheme}
      ></div>
    </div>
  );
};

export default ThemeToggle;
