import AllProjects from '../../components/AllProjects';
import PageTitle from '../../components/PageTitle';

const Projects = () => {

    return (
        <div className='w-full py-10 flex flex-col h-full 
        justify-center items-center mx-auto px-2 md:px-28 2xl:px-2'>
            <PageTitle title="Projects" />
            <div style={{ borderBottom: '1px solid hsla(0,0%,100%,.05)' }}
                className='text-white text-center w-6/12 py-5'>
                <h1 className="text-white font-semibold text-3xl md:text-4xl 2xl:text-[35px] uppercase mb-2">Projects</h1>
                <p>Welcome to my online portfolio. I am a Web Designer and Front-end web developer. I develop a site with React JS in front-end and back-end with Node JS, Express JS and MongoDB. Here some of my projects.</p>
            </div>
            <AllProjects />
        </div>
    );
};

export default Projects;