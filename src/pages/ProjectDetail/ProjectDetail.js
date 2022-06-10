import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SelectOutlined, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
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
            <div className='mt-10'>
                <div>
                    <h1 className='text-[#CACACA] text-5xl font-bold'>{project?.name}</h1>
                    <h1 className='text-[#8A8A8A] text-xl font-bold mt-2 mb-2'>{project?.title}</h1>
                    <button className='text-white px-5 py-2 text-md font-semibold
                     bg-[#00877A] flex justify-center items-center rounded-sm'>
                        <SelectOutlined />
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ruman-islam-6a567016a/' className='ml-2 uppercase'> Visit the website</a>
                    </button>
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
                    <h1 className='text-[#CACACA] text-4xl font-semibold'>Overview</h1>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;