import React from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Form from "../../components/form/Form";
import contact from "../../assets/contact.png";

import "./contactPage.scss";

const ContactPage = () => {
  return (
    <div className="main contact-section">
      <img src={contact} alt="illustration" className="contact-img" />
      <h2 className="header">Get In Touch</h2>
      <div className="information">
        <div className="text">
          <PhoneIcon className="icon" />
          035-995-2085
        </div>
        <div className="text">
          <MailIcon className="icon" />
          linhtatfe@gmail.com
        </div>
        <div className="text">
          <LocationOnIcon className="icon" />
          Binh Tri Dong B, Binh Tan, Ho Chi Minh
        </div>
      </div>
      <Form />
    </div>
  );
};

export default ContactPage;
