import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { SyncOutlined } from '@ant-design/icons';

const AllProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div className='flex justify-center items-center h-[80vh]'>
            <SyncOutlined className='text-[#3CCF91] text-[50px]' spin />
        </div>
    }

    return (
        <div className='w-full md:w-11/12 2xl:w-9/12 py-5 flex flex-col h-full 
        justify-center items-center mx-auto px-2 md:px-0'>
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

export default AllProjects;