import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import Contact from './ContactMe/Contact';
import Skills from './Skills/Skills'

export default function Home() {
  return (
  <div className='home-container'>
      <Profile/>
      <Footer/>
      <Skills/> 
      <Contact/>
      
  </div>
  )
}
