import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
// import bg from '../../assets/image.png';
import bg from '../../assets/Profile Pic no bg.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className='introName'>Mukul Taneja</span> <br /> Software Developer </span>
        <p className='introPara'>I'm a skilled Software Developer with experience in <br /> creating visually appealing and user-friendly websites</p>
        <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro;