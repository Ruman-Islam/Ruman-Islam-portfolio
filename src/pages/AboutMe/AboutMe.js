import React from 'react';
import {
    UserOutlined
} from '@ant-design/icons';
import profileImage from '../../assets/profile-image.png';
import PageTitle from '../../components/PageTitle';

const AboutMe = () => {
    return (
        <div className='p-2 md:px-20 flex items-center h-full md:h-[100vh]'>
            <PageTitle title="About Me" />
            <div className='flex flex-col-reverse md:flex-row justify-around items-center text-white'>
                <div
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    className='basis-6/12'>
                    <div className='flex items-center h-10'>
                        <span className='text-[#EBB838] text-2xl'><UserOutlined /></span>
                        <h1 className='text-[#FFFFFF] mt-2.5 ml-2 text-2xl font-bold'>About Me</h1>
                    </div>
                    <div className='text-[20px] text-[#7F8487]'>
                        <p className='my-3 leading-snug'>
                            Hi, I'm Ruman Islam, a <span className='text-[#3BCF91]'>Developer</span>, <span className='text-[#3BCF91]'>Coder</span>, <span className='text-[#3BCF91]'>Learner</span> and self-proclaimed designer who specializes in front-end development.</p>
                        <p className='leading-snug'>
                            My passion is to involve in the programming world for a lifetime. I really enjoy building web applications and adding new features. Patience is one of my god's blessings for me. This is my key power in solving problems in programming. Furthermore, as I am really ambitious, I can, and want to work with the organizational team and will be through every thick and thin. Lastly, I find this sector very spellbinding and will always work with my full enthusiasm.
                            <br />
                        </p>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    className='basis-4/12'>
                    <img src={profileImage} alt="" />
                </div>
            </div>
        </div>

    );
};

export default AboutMe;