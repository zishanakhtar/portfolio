import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./hero.css";
import dp from "../../assets/dp.png";
import resume from "../../assets/Resume.pdf";

const Hero = () => {
  return (
    <div>
      <div className="heroSection">
        <div className="heroText">
          <div className="heroText">I am Md Zishan Akhtar</div>
          <TypeAnimation
            sequence={["Automation QA", 2000, "Web Developer", 2000]}
            wrapper="div"
            speed={10}
            repeat={Infinity}
          />
          <a href={resume} download="Md Zishan Akhtar - Resume.pdf">
            <button id="downloadResume" down>
              Download Resume
            </button>
            </a>
        </div>
        <img src={dp} alt="" className="heroImg" />
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Hero;
