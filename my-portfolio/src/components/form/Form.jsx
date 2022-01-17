import React from "react";

import TextField from "@mui/material/TextField";

import "./form.scss";
import theme from "../../theme-btn";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";

const Form = () => {
  return (
    <ThemeProvider theme={theme}>
      <form className="form">
        <TextField
          fullWidth
          id="name-input"
          label="Your Name"
          variant="filled"
          size="small"
          required
          className="input"
          color="primary"
        />
        <TextField
          fullWidth
          id="email-input"
          label="Your Email"
          variant="filled"
          size="small"
          required
          className="input"
          color="primary"
        />
        <TextField
          fullWidth
          id="phone-input"
          label="Phone Number"
          variant="filled"
          size="small"
          className="input"
          color="primary"
        />
        <TextField
          fullWidth
          id="message"
          label="Leave me a message"
          rows={5}
          variant="filled"
          size="small"
          multiline
          required
          className="input"
          color="primary"
        />
        <Button variant="contained" color="primary" className="custom-btn">
          get in touch
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default Form;
