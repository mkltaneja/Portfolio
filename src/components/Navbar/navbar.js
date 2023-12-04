import React, { useEffect, useRef } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const mobMenuRef = useRef(null);

  const handleClickOutsideMenu = (e) => {
    if(mobMenuRef.current && !mobMenuRef.current.contains(e.target))
      setShowMenu(false);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    }
  }, []);

  // const handleHamburgerClick = () => {
  //   setHamClicked(!hamClicked);
  //   setShowMenu(!showMenu);
  // }

  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={600} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={600} className='desktopMenuListItem'>Work</Link>
            <Link activeClass='active' to='educations' spy={true} smooth={true} offset={-80} duration={600} className='desktopMenuListItem'>Education</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={600} className='desktopMenuListItem'>Skills</Link>
        </div>

        <button className='desktopMenuBtn' onClick={() => {
          const element = document.getElementById('contact');
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }}>
        <img src={contactImg} className='desktopMenuImg' />
            Contact Me
        </button>

        <img src={menu} alt='Menu' className='mobMenu' ref={mobMenuRef} onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Work</Link>
            <Link activeClass='active' to='educations' spy={true} smooth={true} offset={-80} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Education</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={600} className='listItem' onClick={() => setShowMenu(false)}>Contacts</Link>
        </div>
    </nav>
  )
}

export default Navbar