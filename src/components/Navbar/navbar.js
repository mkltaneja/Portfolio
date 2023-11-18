import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={600} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={600} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={600} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-90} duration={600} className='desktopMenuListItem'>Clients</Link>
        </div>

        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
        <img src={contactImg} className='desktopMenuImg' />
            Contact Me
        </button>

        <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={600} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-90} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-90} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Contacts</Link>
        </div>
    </nav>
  )
}

export default Navbar