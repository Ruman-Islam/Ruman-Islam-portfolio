import React from 'react';
import profileImage from '../assets/profileImage.png';
import { NavLink } from 'react-router-dom';
import resume from '../assets/Ruman-Islam.pdf';

const About = () => {

    return (
        <div className='flex w-full flex-col-reverse md:flex-row text-center md:text-left
         justify-between items-center text-white py-8'>
            <div className='basis-7/12'>
                <div className='about'>
                    <h1 className='text-white text-4xl md:text-7xl font-extrabold'>Ruman Islam</h1>
                    <h2 className='text-white text-3xl pl-1 mt-2 mb-5'>Front-end Web Developer</h2>
                    <p className='pl-1 text-[16px] text-[#919DAE]'>A self-motivated, ambitious and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, and front-end web development with modern web tech like React.js. To work in Software industry with modern web technologies of different local and multinational Software/IT agency of Bangladesh and grow rapidly with increasing skills and responsibilities. Check out my project <NavLink className='link' to='/projects'>project portfolio</NavLink> and <a className='link' target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1m1d_a3cao5woTDYLhhdO7x4hW3D5RZ9i/view?usp=sharing">online resume</a>.</p>
                </div>
                <div className='flex mt-5'>
                    <button className='resume-btn mr-2'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                        <NavLink to='/projects'>View Projects</NavLink>
                    </button>
                    <button className='resume-btn resume-btn-download'>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-alt" className="svg-inline--fa fa-file-alt fa-w-12 w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path></svg>
                        <a href={resume} download={resume} className='ml-1 text-white'>Download Resume</a>
                    </button>
                </div>
            </div>
            <div className='basis-5/12'>
                <img className='w-8/12 m-auto' src={profileImage} alt="" />
            </div>
        </div>
    );
};

export default About;