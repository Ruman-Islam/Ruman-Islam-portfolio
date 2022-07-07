import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhatNext = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='about my-10'>
                <h1 className='title text-left'>What Next!</h1>
                <div className='horizontal-line'></div>
            </div>
            <div className='text-white flex flex-col items-center text-center about'>
                <p className='text-[35px] font-bold no-underline'>Get In Touch</p>
                <p className='text-[#919DAE] no-underline'>I am very glad, you are here. Hope you enjoy. If you have any question or just want to say something, <br /> fell free to drop a message. I will try my best to get you to back</p>
            </div>
            <div onClick={() => navigate('/contacts')} className='flex justify-center py-10'>
                <button className='px-5 py-1 bg-[#54B689] rounded-md
                 text-white resume-btn'>Contact Me</button>
            </div>
        </div>
    );
};

export default WhatNext;