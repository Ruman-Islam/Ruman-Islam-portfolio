import React from 'react';
import PageTitle from '../../components/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import ResumeProjectCard from '../../components/ResumeProjectCard';
import SkillExperties from '../../components/SkillExperties';
import SkillComfortable from '../../components/SkillComfortable';
import SkillTools from '../../components/SkillTools';
import EducationCard from '../../components/EducationCard';
import CourseCard from '../../components/CourseCard';
import {
    projects, education1,
    education2, education3,
    course1, course2
} from '../../data/data';


const AboutMe = () => {

    return (
        <div className='about-me-container'>
            <PageTitle title="About Me" />
            <div>
                <div className='online-resume-container'>
                    <div className='online-resume-wrapper'>

                        <div className='resume-header display-flex light-border-bottom'>
                            <div className='resume-person-title'>
                                <p className='person-name no-underline'>Ruman Islam</p>
                                <p className='person-designation no-underline'>Front-End Developer</p>
                            </div>
                            <div className='contact-items-container'>
                                <div className='contact-item display-flex'>
                                    <FontAwesomeIcon icon={faLocationPin} className='item' />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                                <div className='contact-item display-flex'>
                                    <FontAwesomeIcon icon={faSquarePhone} className='item' />
                                    <a href="tel:+8801536160661">+880 1536-160661</a>
                                </div>
                                <div className='contact-item display-flex'>
                                    <FontAwesomeIcon icon={faSquareEnvelope} className='item' />
                                    <p href=''>rumanislam0429@gmail.com</p>
                                </div>
                                <div className='contact-item display-flex'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='item' />
                                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ruman-islam-6a567016a/'>LinkedIn/RumanIslam</a>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div className='resume-description light-border-bottom'>
                            <div>
                                <p className='no-underline'>I'm a Front-End web developer. My passion is to involve in the programming world for a lifetime. I really enjoy building web applications and adding new features. Patience is one of my god's blessings for me. This is my key power in solving problems in programming. Furthermore, as I am really ambitious, I can, and want to work with the organizational team and will be through every thick and thin. Lastly, I find this sector very spellbinding and will always work with my full enthusiasm.</p>
                            </div>
                        </div>

                        <br />

                        <div style={{ alignItems: 'flex-start' }}
                            className='resume-detail-container display-flex light-border-bottom'>
                            <div className='experience-container'>
                                <div>
                                    <p className='experience-title'>WORKING EXPERIENCE</p>
                                    <div className='company'>
                                        <div className='company-experience display-flex'>
                                            <h3 className='designation'>Customer Service Associate</h3>
                                            <p className='working-date'>April 2021 - Dec 2021</p>
                                        </div>
                                        <div>
                                            <p className='gray-text'>Skill - Premium</p>
                                            <p className='gray-text'>Grameenphone PVT Ltd.</p>
                                            <p className='gray-text'>Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                    <div className='company'>
                                        <div className='company-experience display-flex'>
                                            <h3 className='designation'>Invigilator, IT support</h3>
                                            <p className='working-date'>Jan 2020 - Dec 2020</p>
                                        </div>
                                        <div>
                                            <p className='gray-text'>UDVASH</p>
                                            <p className='gray-text'>Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>

                                <br /> <br />

                                <div>
                                    <p className='experience-title'>PROJECTS</p>
                                    {projects?.map((project, index) =>
                                        <ResumeProjectCard key={index} {...project} />)}
                                </div>
                            </div>

                            <div className='skill-container'>
                                <div>
                                    <p className='skill-title'>SKILLS</p>
                                    <div className='company'>
                                        <h3 className='designation'
                                            style={{ lineHeight: '3', marginBottom: '-10px' }}>Expertise</h3>
                                        <SkillExperties />
                                    </div>
                                    <div className='company'>
                                        <h3 className='designation'
                                            style={{ lineHeight: '3', marginBottom: '-10px' }}>Comfortable</h3>
                                        <SkillComfortable />
                                    </div>
                                    <div className='company'>
                                        <h3 className='designation'
                                            style={{ lineHeight: '3', marginBottom: '-10px' }}>Tools</h3>
                                        <SkillTools />
                                    </div>
                                </div>

                                <br /><br />

                                <div>
                                    <p className='skill-title'>EDUCATION</p>
                                    <EducationCard {...education1} />
                                    <EducationCard  {...education2} />
                                    <EducationCard  {...education3} />
                                </div>

                                <br /><br />

                                <div>
                                    <p className='skill-title'>COURSE</p>
                                    <CourseCard {...course1} />
                                    <CourseCard {...course2} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutMe;