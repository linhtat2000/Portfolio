import { useEffect, useRef } from "react";
import { init } from "ityped";

import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Form from "../../components/form/Form";
import contact from "../../assets/img/contact.png";

import { darkTheme, lightTheme } from "../../theme";

import "./contactPage.scss";

const ContactPage = ({ theme }) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 30,
      strings: ["Let's get in touch"],
    });
  }, []);

  return (
    <div
      className="main contact-section"
      style={theme === "light" ? lightTheme : darkTheme}
    >
      <img src={contact} alt="illustration" className="contact-img" />
      <h2 className="header">
        <span ref={textRef}></span>
      </h2>
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
      <Form theme={theme} />
    </div>
  );
};

export default ContactPage;
