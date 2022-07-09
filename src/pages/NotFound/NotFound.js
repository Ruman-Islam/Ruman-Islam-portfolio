import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='not-found display-flex '>
            <div>
                <h1>Are you lost?</h1>
                <button
                    onClick={() => navigate('/')} className='resume-btn not-found-btn' type='button'>Back to the future</button>
            </div>
        </div>
    );
};

export default NotFound;