import React from 'react';
import { NavLink } from 'react-router-dom';
import Skills from '../components/Skills';

const WhatIDo = () => {
    return (
        <div className='flex flex-col text-white py-8'>
            <div className='about'>
                <h1 className='title'>What I Do</h1>
                <div className='horizontal-line'></div>
                <p className='text-justify text-[16px] text-[#919DAE]'>I’m a Web Developer and Programmer with highly interest in JavaScrips and Modern web tech like React.js. I have experience in web development using JavaScript. Also I’m familiar with MERN Stack Web Development. I’m passionate to make a clean, beautiful, professional, responsive Web site and maximum optimized way so that it performs well. As a programmer, I love taking challenges and love being part of the solution. My hobby is keeping myself updated with all latest technologies and tools. Want to find out more about my experience? Check out my <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1m1d_a3cao5woTDYLhhdO7x4hW3D5RZ9i/view?usp=sharing">online resume</a> and <NavLink to='/projects'>project portfolio</NavLink>.</p>
            </div>
            <Skills />
        </div>
    );
};

export default WhatIDo;