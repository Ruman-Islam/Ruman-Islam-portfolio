import React from 'react';

const ResumeProjectCard = ({ name, liveLink, clientLink, serverLink, techItems, features }) => {

    return (
        <div className='resume-project-card'>
            <div className='project-title display-flex'>
                <h3 className='project-name'>{name}</h3>
                <p className='project-links'>
                    <a target='_blank' rel='noreferrer' href={liveLink}>Livesite</a>
                    <span style={{ marginRight: '.6rem', marginLeft: '.6rem' }}>|</span>
                    <a target='_blank' rel='noreferrer' href={clientLink}>Client</a>
                    <span style={{ marginRight: '.6rem', marginLeft: '.6rem' }}>|</span>
                    <a target='_blank' rel='noreferrer' href={serverLink}>Server</a>
                </p>
            </div>
            <div className='resume-project-detail'>
                <p className='resume-project-detail-title'>Features</p>
                <ul className='project-features'>
                    {features?.map((ft, index) => <li key={index} className='gray-text'>{ft}</li>)}
                </ul>
                <p className='resume-project-detail-title'>Technologies</p>
                <div className='skill-experties'>
                    {techItems?.map((item, index) =>
                        <span key={index}>{item}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeProjectCard;