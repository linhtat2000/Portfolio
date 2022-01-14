import React from "react";
import Navbar from "../../components/navbar/Navbar";

import illusatrion1 from "../../assets/illusatrion-1.png";
import illusatrion2 from "../../assets/illusatrion-1.png";
import illusatrion3 from "../../assets/illusatrion-1.png";

import "../../global.scss";
import "./homepage.scss";
import Button from "@mui/material/Button";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="main">
        <div className="theme-toggle">toggle</div>
        <div className="intro">
          <h1 className="intro-header">
            Hello World!
            <br />
            My name is Linh
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aliquid suscipit explicabo eveniet debitis rem
            deserunt blanditiis ea. Praesentium consequatur voluptatem aliquid
            optio ad eaque nostrum quibusdam ullam quaerat pariatur, aut quae
            et, animi quia enim modi iste?
          </p>
        </div>
        <Button variant="contained" color="primary">
          get in touch
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
