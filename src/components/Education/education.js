import React from 'react'
import './education.css'
import { TypeAnimation } from "react-type-animation";

const edu = [
    {
      sl: 1,
      name: "Class X",
      duration: "2011 - 2012",
      detail:
        "Ishan International Public School, Patna",
    },
    {
      sl: 2,
      name: "Class XII",
      duration: "2013 - 2014",
      detail:
        "Ishan International Public School, Patna",
    },
    {
      sl: 3,
      name: "KIIT School of Mechanical Engineering",
      duration: "2015 - 2019",
      detail:
        "B.Tech in Mechanical Engineering from KIIT School of Mechanical Engineering, Bhubaneswar",
    }
  ];

const Education = () => {
  return (
    <div className='education' id='education'>
      <h2>Education</h2>
      {edu.map((item, key) => {
        return (
          <div key={item.sl} className="aboutCard">
            <h3>{item.name}</h3>
            <span className="aboutDuration">{item.duration}</span>
            {/* <span className="aboutDetail">{item.detail}</span> */}
            <TypeAnimation
              className="aboutDetail"
              sequence={[item.detail, 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </div>
        );
      })}
      <div className="line"></div>
    </div>
  )
}

export default Education
