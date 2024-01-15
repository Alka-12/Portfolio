import React from "react";
import "./About.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import img9 from "../../images/Alka2.jpg";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="About" className="about">
        <h1>About me</h1>
        <div className="about-flex" data-aos="zoom-in">
          <div className="left-content">
            <img src={img9} alt="" />
          </div>
          <div className="right-content">
            <h2>I'm Alka</h2>
            <p>
              I'm a CSE-AI undergraduate at IGDTUW. I'm a Web Developer, a
              constant learner and very enthusiastic about working with new
              people and new technologies. I have good problem solving skills. I
              enjoy learning new skills and implementing them in real life!{" "}
            </p>
            <a
              href="https://www.linkedin.com/in/alka-b09638229"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
