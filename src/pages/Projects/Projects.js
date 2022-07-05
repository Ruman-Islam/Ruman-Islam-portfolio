import AllProjects from '../../components/AllProjects';
import PageTitle from '../../components/PageTitle';

const Projects = () => {

    return (
        <div className='py-10 flex flex-col h-full 
        justify-center items-center'>
            <PageTitle title="Projects" />
            <div className='light-border-bottom text-center'>
                <div
                    className='text-white w-7/12 py-5 mx-auto'>
                    <h1 className="text-white font-semibold text-3xl md:text-4xl 2xl:text-[35px] uppercase mb-2">Projects</h1>
                    <p>Welcome to my online portfolio. I am a Web Designer and Front-end web developer. I develop a site with React JS in front-end and back-end with Node JS, Express JS and MongoDB. Here some of my projects.</p>
                </div>
            </div>
            <AllProjects />
        </div>
    );
};

export default Projects;