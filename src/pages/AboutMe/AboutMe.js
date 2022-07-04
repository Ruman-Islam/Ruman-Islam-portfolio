import React from 'react';
import PageTitle from '../../components/PageTitle';
import ResumeButton from '../../components/ResumeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons'



const AboutMe = () => {
    return (
        <div className='about-me-container'>
            <PageTitle title="About Me" />
            <div>
                <div className='py-10 light-border-bottom'>
                    <h1 className='text-center text-[35px] font-bold text-white'>Online Resume</h1>
                    <ResumeButton />
                </div>
                <div className='online-resume-container'>
                    <div className='online-resume-wrapper'>

                        <div className='resume-header light-border-bottom'>
                            <div className='resume-person-title'>
                                <p className='person-name'>Ruman Islam</p>
                                <p className='person-designation'>Front-end Web Developer</p>
                            </div>
                            <div className='contact-items-container'>
                                <div className='contact-item'>
                                    <FontAwesomeIcon icon={faSquarePhone} className='item' />
                                    <a href="tel:+8801536160661">(+880) 1536-160661</a>
                                </div>
                                <div className='contact-item'>
                                    <FontAwesomeIcon icon={faSquareEnvelope} className='item' />
                                    <p href=''>rumanislam0429@gmail.com</p>
                                </div>
                                <div className='contact-item'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='item' />
                                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ruman-islam-6a567016a/'>LinkedIn/RumanIslam</a>
                                </div>
                                <div className='contact-item'>
                                    <FontAwesomeIcon icon={faLocationPin} className='item' />
                                    <p >Banasree, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='resume-description light-border-bottom'>
                            <div>
                                <div className='resume-image-container profile-img-container'>
                                    <div className='profile-img-wrapper'></div>
                                </div>
                            </div>
                            <div>
                                <p>A self-motivated, ambitious and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, and front-end web development with modern web tech like React.js. To work in Software industry with modern web technologies of different local and multinational Software/IT agency of Bangladesh and grow rapidly with increasing skills and responsibilities. Check out my project project portfolio and online resume.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AboutMe;