import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import PageTitle from '../../components/PageTitle';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Ruman-Islam/portfolio/main/public/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='w-10/12 py-10 flex flex-col h-full md:h-[100vh] 
        justify-center items-center mx-auto'>
            <PageTitle title="Projects" />
            <h1 className="text-white text-3xl md:text-5xl mb-5 mt-[-20px]">Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
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