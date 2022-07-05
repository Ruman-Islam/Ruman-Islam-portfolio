import React from 'react';

const CourseCard = ({ title, institution, link }) => {
    return (
        <div className='company'>
            <h3 className='designation'
                style={{ lineHeight: '3', marginBottom: '-10px' }}>
                {title}
            </h3>
            <p><a target="_blank" rel="noreferrer"
                href={link}>
                {institution}
            </a></p>
        </div>
    );
};

export default CourseCard;