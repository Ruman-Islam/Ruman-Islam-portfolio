import React from 'react';
import PageTitle from '../../components/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons'
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

                        <br />

                        <div className='resume-detail-container light-border-bottom'>
                            <div className='experience-container'>
                                <div>
                                    <p className='experience-title'>WORKING EXPERIENCE</p>
                                    <div className='company'>
                                        <div className='company-experience'>
                                            <h3 className='designation'>Customer Service Associate</h3>
                                            <p className='working-date'>April 2021 - Dec 2021</p>
                                        </div>
                                        <div style={{ fontSize: '15px' }}>
                                            <p>Skill - Premium</p>
                                            <p>Grameenphone PVT Ltd.</p>
                                            <p>Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                    <div className='company'>
                                        <div className='company-experience'>
                                            <h3 className='designation'>Invigilator, IT support</h3>
                                            <p className='working-date'>Jan 2020 - Dec 2020</p>
                                        </div>
                                        <div style={{ fontSize: '15px' }}>
                                            <p>UDVASH</p>
                                            <p>Dhaka, Bangladesh</p>
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