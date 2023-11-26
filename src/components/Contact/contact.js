import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter-icon.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import InstagramIcon from '../../assets/instagram-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form);
        console.log(form.current);
        e.target.reset();
        const message = document.getElementsByName('message').forEach(e => e.value);
        console.log(message);

        emailjs.sendForm('service_g2h897', 'template_25d2h7v', form.current, 'lk49pExSNV-IWC5Kd')
          .then((result) => 
          {
                console.log(result.text);
                alert('Email sent successfully');
            }, 
            (error) => 
            {
                console.log(error.text);
                alert("Couldn't send email");
            });
    }

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
            <img src={Walmart} alt='Client' className='clientImg' />
            <img src={Adobe} alt='Client' className='clientImg' />
            <img src={Microsoft} alt='Client' className='clientImg' />
            <img src={Facebook} alt='Client' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'> Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='socialLinks'>
                <img src={FacebookIcon} alt='Facebook' className='socialLink'></img>
                <img src={TwitterIcon} alt='Twitter' className='socialLink'></img>
                <img src={LinkedInIcon} alt='Youtube' className='socialLink'></img>
                <img src={InstagramIcon} alt='Instagram' className='socialLink'></img>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;