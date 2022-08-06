import React from 'react';
import profileImage from '../assets/Ruman.jpg';
import { NavLink } from 'react-router-dom';
import resume from '../assets/Ruman-Islam.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const About = () => {

    return (
        <div className='display-flex flex-col-reverse md:flex-row
         justify-between items-center text-white py-8'>
            <div className='basis-7/12'>
                <div className='about'>
                    <h1 className='text-white text-4xl md:text-6xl font-extrabold'>Ruman Islam</h1>
                    <h2 className='text-white text-2xl pl-1 mt-2 mb-5'>Front-End Developer</h2>
                    <p className='text-[16px] gray-text no-underline'>A self-motivated, ambitious and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, and front-end web development with modern web tech like React.js. To work in software industry with modern web technologies of different local and multinational Software/IT agency of Bangladesh and world-wide and grow rapidly with increasing skills and responsibilities. Check out my project <NavLink to='/projects'>project portfolio</NavLink> and <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1m1d_a3cao5woTDYLhhdO7x4hW3D5RZ9i/view?usp=sharing">online resume</a>.</p>
                </div>
                <div className='flex mt-5 flex-col md:flex-row'>
                    <button className='resume-btn mr-0 md:mr-2 mb-2 md:mb-0'>
                        <FontAwesomeIcon icon={faBriefcase} className='text-white' />
                        <NavLink to='/projects'>View Projects</NavLink>
                    </button>
                    <button className='resume-btn resume-btn-download'>
                        <FontAwesomeIcon icon={faFileLines} className='text-white' />
                        <a href={resume} download={resume} className='ml-1 text-white'>Download Resume</a>
                    </button>
                </div>
            </div>
            <div className='basis-5/12'>
                <img className='w-5/12 md:w-8/12 m-auto mb-5' src={profileImage} alt="" />
            </div>
        </div>
    );
};

export default About;