import React from "react";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

import theme from "../../theme-btn";
import "./technology.scss";

const Technology = () => {
  return (
    <div className="technology">
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className="custom-btn">
          ReactJS
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Technology;
