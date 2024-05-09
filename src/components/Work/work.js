import React from 'react'
import './work.css'
// import { TypeAnimation } from "react-type-animation";
import docsappLogo from '../../assets/DocsApp-Logo.webp'
import bewakoofLogo from '../../assets/bewakoof-logo.png'
import homelaneLogo from '../../assets/homelane-logo.jpeg'
import paytmLogo from '../../assets/paytm-logo.png'

const work = [
    {
        sl: 1,
        name: "DocsApp",
        duration: "2019 - 2021",
        detail: "Manual and automation testing of android app. API testing using Postman.",
        logo: docsappLogo
      },
      {
        sl: 2,
        name: "Bewakoof.com",
        duration: "2021 - 2022",
        detail:
          "Manual and automation testing of Web app using Selenium Java TestNG framework.",
        logo: bewakoofLogo
      },
      {
        sl: 3,
        name: "Homelane.com",
        duration: "2022 - 2023",
        detail:
          "Manual and automation testing of Web app using Selenium Java TestNG framework.",
        logo: homelaneLogo
      },
      {
        sl: 4,
        name: "Paytm",
        duration: "2023 - Present",
        detail:
          "Manual and automation testing of Web app using Selenium Java TestNG framework.",
        logo: paytmLogo
      },
  ];

const Work = () => {
  return (
    <div className='work' id='work'>
      <h2>Work History</h2>
      <div className="workCardContainer">
      {work.map((item, key) => {
        return (
          <div key={item.sl} className="workCard">
            <img src={item.logo} alt="" />
            <h3>{item.name}</h3>
            <span className="aboutDuration">{item.duration}</span>
            <span className="aboutDetail">{item.detail}</span>
            {/* <TypeAnimation
              className="aboutDetail"
              sequence={[item.detail, 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
            /> */}
          </div>
        );
      })}
       </div>
      <div className="workLine"></div>
    </div>
  )
}

export default Work
