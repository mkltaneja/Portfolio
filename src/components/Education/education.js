import React from 'react';
import './education.css';
import EducationLogo from '../../assets/Education_Logo.png';

const education = () => {
  return (
    <section id='educations'>
        <h2 className='educationTitle title'>Education</h2>
        <div className='educationWrapper'>
            <div className='education'>
                <img src={EducationLogo} alt='Education Logo' className='educationImg' />
                <div className='educationText'>
                    <h2 className='educationField heading'>Bachelors of Technology in Computer Science and Engineering</h2>
                    <p className='educationCompany yellowText'>MAIT, Guru Gobind Singh Indraprastha University</p>
                    <p className='educationDuration'>2018 - 2022</p>
                    <p className='educationDesc'>CGPA: 8.042 / 10</p>
                </div>
            </div>

            <div className='education'>
                <img src={EducationLogo} alt='Education Logo' className='educationImg' />
                <div className='educationText'>
                    <h2 className='educationField heading'>Class 12th / High School</h2>
                    <p className='educationCompany yellowText'>White Leaf Public School</p>
                    <p className='educationDuration'>2016 - 2018</p>
                    <p className='educationDesc'>Percentage: 80%</p>
                </div>
            </div>

            <div className='education'>
                <img src={EducationLogo} alt='Education Logo' className='educationImg' />
                <div className='educationText'>
                    <h2 className='educationField heading'>Class 10th</h2>
                    <p className='educationCompany yellowText'>Sanatan Dharam Vidhya Mandir</p>
                    <p className='educationDuration'>2015 - 2016</p>
                    <p className='educationDesc'>CGPA: 9 / 10</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default education