import React from "react";
import "./SkillBox.css";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectBox(props) {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="projectbox">
      <img src={props.img} alt="images" />
      <div className="details">
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default ProjectBox;
