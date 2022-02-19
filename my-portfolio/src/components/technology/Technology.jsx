import React from "react";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

import btnTheme from "../../btn-theme";
import "./technology.scss";

const Technology = ({ item }) => {
  return (
    <div className="technology">
      <ThemeProvider theme={btnTheme}>
        <Button variant="contained" color="primary" className="custom-btn">
          {item}
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Technology;
