import React from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import "./themeToggle.scss";

const ThemeToggle = ({ theme }) => {
  return (
    <div className="toggle">
      <LightModeIcon className="toggle-icon" />
      <DarkModeIcon className="toggle-icon" />
      <div
        className="toggle-button"
        style={{ left: theme === "light" ? 0.15 + "em" : 3 + "em" }}
      ></div>
    </div>
  );
};

export default ThemeToggle;
