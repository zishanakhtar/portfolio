import React from 'react'
import './projects.css'

const projectCollection = [
  {
    id: 1,
    name: "Muhima - Task Planner",
    tech: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://muhima.vercel.app/",
  },
  {
    id: 2,
    name: "Royal Meat Shop",
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://royalmeat.vercel.app/",
  },
  {
    id: 3,
    name: "Portfolio",
    tech: ["React", "CSS"],
    liveUrl: "https://zishan-akhtar.web.app/",
  },
]

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      <div className="projectsContainer">
        {projectCollection.map((item, key)=>{
          return(
            <div key={item.id} className="projectCard">
              <h3>{item.name}</h3>
              <div className="techContainer">
              {item.tech.map((techItem)=>{
                return(
                    <div className="techItem">{techItem}</div>
                )
              })}
              </div>
              <a href={item.liveUrl} target='_blank' rel="noreferrer">
              <button id='btnLiveLink'>Live Link</button>
              </a>
            </div>
          )
        })}
      </div>
      <div className="projectsLine"></div>
    </div>
  )
}

export default Projects
