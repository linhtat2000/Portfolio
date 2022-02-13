import React, { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import "./themeToggle.scss";

const ThemeToggle = () => {
  const [toggle, setToggle] = useState("sun");

  const handleToggle = (e, toggle) => {
    setToggle(toggle);
  };

  return (
    <ToggleButtonGroup
      value={toggle}
      size="small"
      exclusive
      onChange={handleToggle}
      aria-label="light/dark theme"
      className="toggle-btn"
    >
      <ToggleButton value="sun" aria-label="light theme">
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value="moon" aria-label="dark theme">
        <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeToggle;
