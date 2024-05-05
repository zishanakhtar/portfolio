import React from "react";
import "./about.css";


const About = () => {
  return (
    <div className="about" id="aboutMe">
      <h2>About Me</h2>
      <div className="aboutDesc">
        <p>
        I am Md Zishan Akhtar, an automation tester with 4+ years of experience in desktop, mobile and api automation testing.
        </p>
        <p>
            Android app automation testing is where I started my automation testing journey as I explored Appium-Java-TestNG framework.
        </p>
        <p>
            I've also worked on UI automation testing using Selenium-Java-TestNG framework as well as Python Robot framework.
        </p>
        <p>
            Apart from this, I also have a hands-on experience on API automation testing using Java RestAssured and Python Pytest.
        </p>
        <p>
            Currently I'm exploring front-end development using ReactJS.
        </p>
      </div>
      <div className="aboutLine"></div>
    </div>
  );
};

export default About;
