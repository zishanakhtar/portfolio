import React from 'react'
import "./navbar.css"
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'


function scrollToAbout() {
  document.getElementById('aboutMe').scrollIntoView({block: 'center'})
}

function scrollToEducation() {
  document.getElementById('education').scrollIntoView({block: 'center'});
}

function scrollToWork() {
  document.getElementById('work').scrollIntoView({block: 'center'});
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
            <Link className='desktopMenuListItem' onClick={scrollToTop}>Home</Link>
            <Link className='desktopMenuListItem' onClick={scrollToAbout}>About</Link>
            <Link className='desktopMenuListItem' onClick={scrollToEducation}>Education</Link>
            <Link className='desktopMenuListItem' onClick={scrollToWork}>Work</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src="" alt="" className="desktopMenuImg" />Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar
