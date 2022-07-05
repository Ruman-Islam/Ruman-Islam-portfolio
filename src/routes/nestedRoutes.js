import Projects from "../pages/Projects/Projects";
import Contacts from "../pages/Contacts/Contacts";
import Blog from "../pages/Blog/Blog";
import Intro from "../pages/Intro/Intro";
import AboutMe from "../pages/AboutMe/AboutMe";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";

export const nestedRoutes = [
    { path: 'project-detail/:id', name: 'ProjectDetail', Component: ProjectDetail },
    { path: 'projects', name: 'Projects', Component: Projects },
    { path: 'contacts', name: 'Contacts', Component: Contacts },
    { path: '/', name: 'Intro', Component: Intro },
    { path: 'blog', name: 'Blog', Component: Blog },
    { path: 'about-me', name: 'AboutMe', Component: AboutMe },
    { name: '/', Component: Intro }
]