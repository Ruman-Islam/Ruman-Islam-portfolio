import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllProjects from './AllProjects';

const MyWorks = () => {
    const navigate = useNavigate();

    return (
        <div className='about text-left mt-5 py-5'>
            <h1 className='title text-left'>Some Of My Works</h1>
            <div className='horizontal-line'></div>
            <div className='grid grid-cols-1'>
                <AllProjects />
            </div>
            <div className='w-full flex justify-center mt-8'>
                <div onClick={() => navigate('/projects')}
                    className='border border-[#54B689] hover:bg-[#54B689] hover:text-white duration-300 flex items-center text-[#54B689] px-3 py-1'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg>
                    <button>See All Projects</button>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;