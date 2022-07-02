import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import PageTitle from '../../components/PageTitle';
import { SyncOutlined } from '@ant-design/icons';

const Projects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/Ruman-Islam/portfolio/main/public/projects.json?token=GHSAT0AAAAAABTKZKK7PBPUGOSRA52XHUBEYWAUHHA`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='flex justify-center items-center h-[100vh]'>
            <SyncOutlined className='text-[#3CCF91] text-[50px]' spin />
        </div>
    }

    return (
        <div className='w-full md:w-11/12 2xl:w-9/12 py-10 flex flex-col h-full 
        justify-center items-center mx-auto px-2 md:px-0'>
            <PageTitle title="Projects" />
            <h1 className="text-white font-semibold text-3xl md:text-4xl 2xl:text-5xl uppercase mb-2">Projects</h1>
            <hr className='border-[#7F8487] w-full mb-10' />
            <div className='grid grid-cols-1'>
                {projects?.map(project =>
                    <ProjectCard
                        project={project} key={project.id}
                    />
                )}
            </div>
        </div>
    );
};

export default Projects;