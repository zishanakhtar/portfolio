import React from 'react'
import "./navbar.css"
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

function scrollToElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
    let offset = -80; // Adjust the offset as needed

    // Calculate the target scroll position
    let targetScrollPosition = element.getBoundingClientRect().top + window.scrollY + offset;

    // Scroll to the target position
    window.scrollTo({
      top: targetScrollPosition,
    });
  }
}

function scrollToAbout() {
  scrollToElement('aboutMe')
}

function scrollToSkills() {
  scrollToElement('skills')
}

function scrollToEducation() {
  scrollToElement('education')
}

function scrollToWork() {
  scrollToElement('work')
}

function scrollToProjects() {
  scrollToElement('projects')
}

function scrollToContact() {
  scrollToElement('contact')
}

function scrollToTop() {
  window.scrollTo(0,0)
}

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img onClick={scrollToTop} src={logo} alt="" className='logo'/>
        <div className="desktopMenu">
            {/* <Link className='desktopMenuListItem' onClick={scrollToTop}>Home</Link> */}
            <Link className='desktopMenuListItem' onClick={scrollToAbout}>About</Link>
            <Link className='desktopMenuListItem' onClick={scrollToSkills}>Skills</Link>
            <Link className='desktopMenuListItem' onClick={scrollToEducation}>Education</Link>
            <Link className='desktopMenuListItem' onClick={scrollToWork}>Work</Link>
            <Link className='desktopMenuListItem' onClick={scrollToProjects}>Projects</Link>
        </div>
        <button className="desktopMenuBtn" onClick={scrollToContact}>
            <img src="" alt="" className="desktopMenuImg" />Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar
