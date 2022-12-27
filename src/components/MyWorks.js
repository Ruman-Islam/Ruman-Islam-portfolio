import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllProjects from './AllProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const MyWorks = () => {
    const navigate = useNavigate();

    return (
        <div className='about text-left mt-5 py-5'>
            <h1 className='title text-left'>Some Of My Works</h1>
            <div className='horizontal-line'></div>
            <br />
            <AllProjects />
            <div className='w-full flex justify-center mt-8'>
                <div onClick={() => navigate('/projects')}
                    className='border border-[#02cfb4] hover:bg-[#02cfb4] hover:text-white duration-300 flex items-center text-[#02cfb4] px-3 py-1'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className='mr-2 mb-.5' />
                    <button>See All Projects</button>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;