import React from "react";
import "./Home.css";
import img8 from "../../../src/images/home_page.jpeg";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="Home" className="home">
        <div className="home-flex">
          <div
            className="left-content"
            data-aos="fade-down"
            data-aos-delay="20"
          >
            <p>Hello, My name is</p>
            <h1>Alka</h1>
            <h2>
              and I'm a <span className="typing"></span>
            </h2>
            <a
              href="https://drive.google.com/file/d/1XUyhM51O8u1MluDrF5zXhh_n3O02wN8d/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div className="right-content" data-aos="fade" data-aos-delay="20">
            <img src={img8} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
