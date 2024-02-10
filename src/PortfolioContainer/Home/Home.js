import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import Contact from './ContactMe/Contact';
import Skills from './Skills/Skills'
import Education from './Education/index';
import Experience from './Experience/Experience';

export default function Home() {
  return (
  <div className='home-container'>
      <Profile/>
      <Footer/>
      <Skills/> 
      <Footer/>
      {/* <Education/> */}
      <Experience/>
      <Footer/>
      <Contact/>
      
      
  </div>
  )
}
