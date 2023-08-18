import React from "react";
import "./Project.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import ProjectBox from "../../components/ProjectBox/ProjectBox";
import img7 from "../../images/SnakeTic.png";
import img3 from "../../images/sign-language.jpg";
import img6 from "../../images/Portfolio.png";

function Project() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div id="Project" className="project">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox
              title="SnakeTic"
              img={img7}
              link="https://github.com/Alka-12/SnakeTic"
              link2="https://snaketic.netlify.app/"
            />
            <ProjectBox
              title="Portfolio"
              img={img6}
              link="https://github.com/Alka-12/Portfolio"
              link2="https://alkaportfolio.netlify.app/"
            />
            {/* <ProjectBox
              title="AMB Engineers Website"
              img={img5}
              link="https://github.com/Alka-12/AMB-Engineers"
              link2=""
            /> */}
            <ProjectBox
              title="American Sign Language Recognition"
              img={img3}
              link="https://github.com/Alka-12/Sign_Language_Recognition"
              link2=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
