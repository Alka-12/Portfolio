import React from "react";
import "./Skills.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import SkillBox from "../../components/SkillBox/SkillBox";
import img1 from "../../images/Java.png";
import img2 from "../../images/python.png";
import img3 from "../../images/ml.jpg";
import img4 from "../../images/dl.png";
import img5 from "../../images/html.jpg";
import img6 from "../../images/css.avif";
import img7 from "../../images/bootstrap.jpg";
import img8 from "../../images/JavaScript.png";
import img9 from "../../images/react.png";

function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div id="Skill" className="skill">
      <h1>Technologies and Stacks</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <SkillBox title="Java" img={img1} />
            <SkillBox title="Python" img={img2} />
            <SkillBox title="React.js" img={img9} />
            <SkillBox title="Javacript" img={img8} />
            <SkillBox title="HTML" img={img5} />
            <SkillBox title="CSS" img={img6} />
            <SkillBox title="Machine Learning" img={img3} />
            <SkillBox title="Deep Learning (basic implementation)" img={img4} />
            <SkillBox title="Bootstrap" img={img7} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
