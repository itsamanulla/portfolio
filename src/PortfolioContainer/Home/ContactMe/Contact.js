import React, { useRef, useState } from 'react';
import './Contact.css';
import mob from './mob.png';
import email from './email.png';
import map from './map.png';
import emailjs from 'emailjs-com';


export default function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cqhgbwe', 'template_nbo90oj', formRef.current, 'user_88zd1X3jlgEi9gDr8srgf')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='contact-container' id='Contact'>
      <div className="contact-parent">
        <div className="contact-left">
          <h1>Contact Me</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={mob} alt="" className="contact-icon" />
              9082121779
            </div>
            <div className="contact-info-item">
              <img src={email} alt="" className="contact-icon" />
              amnulla2708@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={map} alt="" className="contact-icon" />
              Mumbai
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            <span style={{color:"yellow",margin:"5px"}}>{done && "SEND SUCCESSFULLY.."}</span>

          </form></div>
      </div></div>
  )
}

