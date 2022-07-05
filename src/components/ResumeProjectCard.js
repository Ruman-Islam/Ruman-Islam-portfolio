import React from 'react';

const ResumeProjectCard = ({ name, liveLink, clientLink, serverLink, techItems, features }) => {

    return (
        <div className='resume-project-card'>
            <div className='project-title'>
                <h3 className='project-name'>{name}</h3>
                <p className='project-links'>
                    <a href={liveLink}>Livesite</a><span style={{ marginRight: '.6rem', marginLeft: '.6rem' }}>|</span>
                    <a href={clientLink}>Client</a><span style={{ marginRight: '.6rem', marginLeft: '.6rem' }}>|</span>
                    <a href={serverLink}>Server</a>
                </p>
            </div>
            <div className='resume-project-detail'>
                <p className='resume-project-detail-title'>Features</p>
                <ul className='project-features'>
                    {features?.map((ft, index) => <li key={index}>{ft}</li>)}
                </ul>
                <p className='resume-project-detail-title'>Technologies</p>
                <div className='resume-project-technology'>
                    {techItems?.map((item, index) =>
                        <span key={index} className='tech-item'>{item}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeProjectCard;