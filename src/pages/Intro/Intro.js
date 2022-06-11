import React from 'react';
import profileImage from '../../assets/profile-image.png';
import { FilePdfFilled } from '@ant-design/icons';
import resume from '../../assets/Ruman-Islam.pdf';
import PageTitle from '../../components/PageTitle';

const Intro = () => {
    return (
        <div className='p-2 md:px-20 flex items-center h-full md:h-[100vh]'>
            <PageTitle title="Intro" />
            <div className='flex flex-col-reverse md:flex-row justify-around items-center text-white'>
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className='basis-6/12'>
                    <div>
                        <h1 className='text-[#3BCF91] text-2xl pl-1'>Hi! I'm</h1>
                        <h1 className='text-white text-4xl md:text-7xl font-extrabold'>Ruman Islam</h1>
                        <h2 className='text-white text-3xl pl-1 mt-2 mb-5'>Front-end Web Developer</h2>
                        <p className='pl-1 text-[18px] text-[#7F8487]'>A self-motivated, ambitious and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, and front-end web development with modern web tech like React.js.</p>
                    </div>
                    <div className='flex items-start flex-col'>
                        <button className='px-4 py-1 my-5 bg-[#1E2A3A]
                     text-lg flex items-center resume-btn rounded'>
                            <FilePdfFilled className='text-[#3BCF91]' />
                            <a href={resume} download={resume} className='ml-1'>Resume</a>
                        </button>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className='basis-5/12'>
                    <img src={profileImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;