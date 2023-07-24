import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <h1>
              This is a ECOMMERCE wesbite made by Karan Sehgal with the
              purpose to create and manage online store.
            </h1>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
