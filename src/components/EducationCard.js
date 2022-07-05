import React from 'react';

const EducationCard = ({ degree, institution, session, gpa }) => {
    return (
        <div className='company'>
            <h3 className='designation'
                style={{ lineHeight: '3', marginBottom: '-10px' }}>
                {degree}
            </h3>
            <p>{institution}</p>
            <p>Session : {session}</p>
            <p>GPA : {gpa}</p>
        </div>
    );
};

export default EducationCard;