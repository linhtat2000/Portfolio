import { useRef, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Alert,
  AlertTitle,
  Collapse,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";

import btnTheme from "../../btn-theme";
import "./form.scss";

const Form = ({ theme }) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [open, setOpen] = useState(true);
  const formRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewb244t",
        "template_zn7rrws",
        formRef.current,
        "user_gx20gqVa47JHmhaGxjb5h"
      )
      .then(
        (response) => {
          console.log(response.status, response.text);
          setIsSuccess("success");
        },
        (error) => {
          console.log(error);
          setIsSuccess("error");
        }
      );
  };

  const displayFeedback = () => {
    switch (isSuccess) {
      case "success":
        return (
          <Collapse in={open}>
            <Alert
              Alert
              severity="success"
              className="feedback-msg"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              }
            >
              <AlertTitle>Your message has been sent</AlertTitle>
              I'll respone you as soon as possible :) Have a nice day!
            </Alert>
          </Collapse>
        );
      case "error":
        return (
          <Alert severity="error" className="feedback-msg">
            <AlertTitle>Oops! Your message has not been sent </AlertTitle>
            Please try again later! Or you can directly hit me up on the phone
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={btnTheme}>
      <form
        id="contact-form"
        ref={formRef}
        onSubmit={handleSubmitForm}
        style={{ backgroundColor: theme === "light" ? null : "#004E79" }}
      >
        <TextField
          fullWidth
          id="name-input"
          label="Your Name"
          variant="filled"
          size="small"
          required
          name="user_name"
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
          name="user_email"
          className="input"
          color="primary"
        />
        <TextField
          fullWidth
          id="phone-input"
          label="Phone Number"
          variant="filled"
          size="small"
          name="user_phoneNumber"
          className="input"
          color="primary"
        />
        <TextField
          fullWidth
          id="subject-input"
          label="Your Subject"
          variant="filled"
          size="small"
          required
          name="user_subject"
          className="input"
          color="primary"
        />
        <TextField
          fullWidth
          id="message"
          label="Leave me a message"
          rows={4}
          variant="filled"
          size="small"
          multiline
          required
          name="message"
          className="input"
          color="primary"
        />
        <Button
          variant="contained"
          color={theme === "light" ? "primary" : "secondary"}
          className="custom-btn"
          type="submit"
        >
          Send Message
        </Button>
        {displayFeedback()}
      </form>
    </ThemeProvider>
  );
};

export default Form;
