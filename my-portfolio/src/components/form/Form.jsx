import React, { useRef } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert, AlertTitle, ThemeProvider } from "@mui/material";
import emailjs from "emailjs-com";

import theme from "../../theme-btn";
import "./form.scss";
import { useState } from "react";

const Form = () => {
  const [isSucceed, setIsSucceed] = useState(false);
  const formRef = useRef();

  const handleFeedback = (isSucceed) => {
    isSucceed ? (
      <Alert severity="success" className="feedback-msg">
        <AlertTitle>Your message has been sent</AlertTitle>
        I'll respone you as soon as possible :) Have a nice day!
      </Alert>
    ) : (
      <Alert severity="error" className="feedback-msg">
        <AlertTitle>Oops! Your message has not been sent :(</AlertTitle>
        Please try again later! Or you can directly hit me up on the phone
      </Alert>
    );
  };
  // const action = setTimeout(handleFeedback(isSucceed), 2000);
  // clearTimeout(action);

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
          setIsSucceed(true);
        },
        (error) => {
          console.log(error);
          setIsSucceed(false);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <form id="contact-form" ref={formRef} onSubmit={handleSubmitForm}>
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
          color="primary"
          className="custom-btn"
          type="submit"
        >
          send message
        </Button>
      </form>
      ;
    </ThemeProvider>
  );
};

export default Form;
