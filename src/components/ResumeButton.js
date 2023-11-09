import React from 'react';
import resume from '../assets/Ruman Islam(Resume).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const ResumeButton = () => {
    return (
        <div className='resume-btn-container display-flex'>
            <button className='resume-btn resume-btn-blinking'>
                <FontAwesomeIcon icon={faFileLines} className='text-white' />
                <a href={resume} download={resume} className='ml-1 text-white font-bold'>Download Resume</a>
            </button>
        </div>
    );
};

export default ResumeButton;