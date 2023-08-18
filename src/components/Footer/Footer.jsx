import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="author">
          <p>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/alka-alka"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alka
            </a>{" "}
            with <i className="far fa-heart"></i>
          </p>
        </div>
        <div className="">
          <p className="copyright">
            {" "}
            <i className="far fa-copyright"></i> 2023 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
