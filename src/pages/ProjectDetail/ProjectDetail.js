import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SelectOutlined, DoubleRightOutlined, DoubleLeftOutlined, GithubOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
const contentStyle = {
    background: '#F2F3F3',
};

const ProjectDetail = () => {
    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const project = data?.find(pg => +pg.id === +id);
                setProject(project)
            })
    }, [id])


    return (
        <div className='w-8/12 mx-auto'>
            <div className='py-10'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-[#CACACA] text-5xl font-bold'>{project?.name}</h1>
                        <h1 className='text-[#8A8A8A] text-xl font-bold mt-2 mb-2'>{project?.title}</h1>
                    </div>
                    <div className='flex flex-col'>
                        <a target="_blank" rel="noopener noreferrer" href={project?.liveLink}
                            className='ml-2 uppercase text-white px-5 py-2 text-md font-semibold
                         bg-[#00877A] flex justify-center items-center rounded-sm
                          hover:text-white hover:scale-105'>
                            <SelectOutlined />
                            <span className='ml-1'>Visit the website</span>
                        </a>
                        <div className='flex justify-between mt-3'>
                            <a target="_blank" rel="noopener noreferrer" href={project?.gitClient}
                                className='ml-2 uppercase text-white px-5 py-2 text-md font-semibold
                         bg-[#00877A] flex justify-center items-center rounded-sm
                          hover:text-white hover:scale-105'>
                                <GithubOutlined />
                                <span className='ml-1'>Client</span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={project?.gitServer}
                                className='ml-2 uppercase text-white px-5 py-2 text-md font-semibold
                         bg-[#00877A] flex justify-center items-center rounded-sm
                          hover:text-white hover:scale-105 btn'>
                                <GithubOutlined />
                                <span className='ml-1'>Server</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='my-10 border border-slate-500'>
                    <Carousel swipeToSlide draggable arrows
                        nextArrow={<DoubleRightOutlined />} prevArrow={<DoubleLeftOutlined />}>
                        {project?.screenshots?.map(ss =>
                            <>
                                <div style={contentStyle} className='flex w-full
                             justify-center items-center cursor-grabbing'>
                                    <img className='w-full h-[50vh]' src={ss} alt="" />
                                </div>
                            </>)}
                    </Carousel>
                </div>
                <div>
                    <h1 className='text-[#CACACA] text-4xl font-semibold border-[#CACACA]
                     border-t-0 border-l-0 border-r-0 border-b leading-loose'>Overview</h1>
                    <p className='text-[#8A8A8A] text-xl mt-5 text-justify'>{project?.overview}</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-[#CACACA] text-4xl font-semibold border-[#CACACA]
                     border-t-0 border-l-0 border-r-0 border-b leading-loose'>Features</h1>
                    <ul className='list-disc pl-5'>
                        {project?.features?.map((ft, index) =>
                            <li key={index}
                                className='text-[#8A8A8A] text-xl leading-loose'>
                                {ft}
                            </li>)}
                    </ul>
                </div>
                <div>
                    <h1 className='text-[#CACACA] text-4xl font-semibold border-[#CACACA]
                     border-t-0 border-l-0 border-r-0 border-b leading-loose'>Technology Used</h1>
                    <ul className='my-5 list-disc pl-5'>
                        {project?.technology?.map((tech, index) =>
                            <li
                                className='text-xl text-[#8A8A8A] ml-2'
                                key={index}>
                                {tech},
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;