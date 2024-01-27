import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import { Link } from 'react-scroll';


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.facebook.com/amanulla2708/" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-facebook-square' ></i>
                            </a>

                            <a href="https://www.instagram.com/its_amanulla/" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-instagram'></i>
                            </a>

                            <a href="https://twitter.com/amnulla2708" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href="https://github.com/itsamanulla" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/amanullah-shaikh-1256301bb/" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Amanullah</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        
                                        "Full Stack Web Developer",
                                        1000,
                                        "Django Framework",
                                        1000,
                                        "React Js",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                {/* I have excelled full stack Website developement. */}
                                I Am Into Software Development.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <Link className='btn primary-btn' to='Contact' spy={true} smooth={true}>Contact Me</Link>
                        <a href="Resume.pdf" download="Amanullah Resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
