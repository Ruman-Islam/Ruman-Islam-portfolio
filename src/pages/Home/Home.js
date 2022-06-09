import React from 'react';
import profileImage from '../../assets/profile-image.png';
import { FileOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <div className='p-2 xl:px-20 text-center xl:text-left'>
            <div className='flex flex-col xl:flex-row justify-around items-center text-white'>
                <div className='w-full xl:w-5/12'>
                    <h1 className='text-white text-4xl xl:text-7xl'>Ruman Islam</h1>
                    <h2 className='text-white text-3xl pl-1 mt-2 mb-5'>Front-end Web Developer</h2>
                    <p className='pl-1'>A self-motivated, ambitious and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, and front-end web development with modern web tech like React.js. To work in Software industry with modern web technologies of different local and multinational Software/IT agency of Bangladesh and grow rapidly with increasing skills and responsibilities. Check out my project portfolio and online resume.</p>
                    <button className='px-5 py-1 rounded my-5 mx-auto xl:ml-0
                     bg-[#1890FF] text-lg font-semibold flex justify-center items-center'>
                        <FileOutlined />
                        <span className='ml-2'> Download Resume</span>
                    </button>
                </div>
                <div className='w-full xl:w-5/12'>
                    <img src={profileImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;