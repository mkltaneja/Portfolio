import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import resumeIcon from '../../assets/Resume_icon.png';
import externalLink from '../../assets/external-link.png';
import bg from '../../assets/Profile Pic no bg.png';
import resume from '../../assets/Mukul_Taneja_Resume.pdf';

const Intro = () => {

  const RESUME_LINK = "https://drive.google.com/file/d/1U_VLDAEElZ64UJBKqNw4dykdEEEDyiqa/view";

  // const handleResumeDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = resume;
  //   link.setAttribute('download', "Mukul_Taneja_Resume.pdf");
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // }

  const handleRedirection = (hyperlink) => {
    const link = document.createElement('a');
    link.href = hyperlink;
    link.target = "_blank";
    // link.setAttribute("")
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <section id="intro">
      <div className='introContent'>
        <span className="hello">Hello!!</span>
        <span className="introText">I'm <span className='yellowText'>Mukul Taneja</span> <br /> Software Developer </span>
        <p className='introPara'>
          I'm a <span className='yellowText'>Software Developer</span> and a <span className='yellowText'>Sport Programmer</span>. <br /> I love to compete in the coding contests <br />
          I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence
        </p>
        <Link to='#' onClick={() => handleRedirection(RESUME_LINK)}>
          <button className='resumeBtn'>
          <img src={resumeIcon} alt="Resume" className='resumeIcon' />
          Resume
          <img src={externalLink} alt="Redirect" className='externalLink' />
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className='profileImage' />
    </section>
  )
}

export default Intro;