import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import plexImg from '../../assets/plex.png';
import warehouseImg from '../../assets/warehouse.png';
import photometryImg from '../../assets/photometry (1).png';

const projects = [
    {
        img: plexImg, name: 'PLEX',
        description: 'Login system, Separate dashboard for user & admin, user settings. Super admin, add/remove admin, manage products & users, protected route. Book and cancel orders, Purchase and pay through stripe.',
        liveLink: 'https://plex-4449f.firebaseapp.com/',
        gitClient: 'https://github.com/Ruman-Islam/plex-client',
        gitServer: 'https://github.com/Ruman-Islam/plex-server'
    },
    {
        img: warehouseImg, name: 'Shelter',
        description: 'This website is for only admin. They can manage and update products. Login system, secured API with JWT, dashboard, separate vendor. CRUD operation, user settings, top sellers and products dynamically.',
        liveLink: 'https://warehouse-47f11.web.app/',
        gitClient: 'https://github.com/Ruman-Islam/warehouse-management-client',
        gitServer: 'https://github.com/Ruman-Islam/warehouse-management-server'
    },
    {
        img: photometryImg, name: 'Photometry',
        description: 'This is an individual service provider who provides photography in various event if available date. Admin, Landing page, login system, shipping form, cart, contact form, CRUD operation, Database integration, user settings, etc.',
        liveLink: 'https://dream-weaver-91b28.web.app/',
        gitClient: 'https://github.com/Ruman-Islam/dream-weaver-client',
        gitServer: 'https://github.com/Ruman-Islam/dream-weaver-server'
    },
]

const Projects = () => {
    return (
        <div className='w-10/12 py-10 flex flex-col h-full md:h-[100vh] 
        justify-center items-center mx-auto'>
            <h1 className="text-white text-3xl md:text-5xl mb-5 mt-[-20px]">This is projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {projects?.map(({ img, name, description, liveLink, gitClient, gitServer }) =>
                    <ProjectCard
                        img={img} name={name} description={description}
                        liveLink={liveLink} gitClient={gitClient} gitServer={gitServer}
                    />
                )}

            </div>
        </div>
    );
};

export default Projects;