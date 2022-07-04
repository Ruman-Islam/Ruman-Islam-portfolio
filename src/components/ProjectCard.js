import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, project: { id, img, name, description } }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row justify-between items-center h-full'>
            <div
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="2000"
                className='p-2 md:p-5 2xl:p-10 w-full md:w-10/12 2xl:w-12/12'>
                <img className='w-full' src={img} alt="" />
            </div>
            <div
                data-aos="flip-down"
                data-aos-delay="200"
                data-aos-duration="2000"
                className='p-2 md:p-5 2xl:p-10 w-full md:w-10/12 2xl:w-12/12'>
                <div>
                    <h1 className='text-[30px] 2xl:text-[40px] text-white font-bold'>{name}</h1>
                    <p className='text-[#7F8487]'>{description}</p>
                </div>
                <div>
                    <h1 className='text-[20px] 2xl:text-[23px] font-semibold text-white mb-2'>Technology Used</h1>
                    <hr className='border-[#7F8487] border-1 w-full mb-2' />
                    <div className='text-[14px] 2xl:text-[18px] flex justify-around'>
                        <span className='px-5 md:px-8 py-1 rounded text-white bg-[#29303D]'>HTML</span>
                        <span className='px-5 md:px-8 py-1 rounded text-white bg-[#29303D]'>CSS</span>
                        <span className='px-5 md:px-8 py-1 rounded text-white bg-[#29303D]'>JS</span>
                        <span className='px-5 md:px-8 py-1 rounded text-white bg-[#29303D]'>MERN</span>
                    </div>
                    <hr className='border-[#7F8487] border-1 w-full mt-2' />
                    <div className='mt-5 text-white'>
                        <a
                            className='px-5 py-1 hover:text-white bg-[#06283D] hover:bg-[#3CCF91] rounded uppercase mr-2'
                            type='button' target="_blank" rel="noopener noreferrer" href={project?.liveLink} >
                            preview
                        </a>
                        <button
                            onClick={() => navigate(`/project-detail/${id}`)}
                            className='px-5 py-1 bg-[#06283D] hover:bg-[#3CCF91] rounded uppercase'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;