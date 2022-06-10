import Projects from "../pages/Projects/Projects";
import Contacts from "../pages/Contacts/Contacts";
import Blog from "../pages/Blog/Blog";
import AboutMe from "../pages/AboutMe/AboutMe";
import Skills from "../pages/Skills/Skills";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";

export const nestedRoutes = [
    { path: 'project-detail/:id', name: 'ProjectDetail', Component: ProjectDetail },
    { path: 'projects', name: 'Projects', Component: Projects },
    { path: 'contacts', name: 'Contacts', Component: Contacts },
    { path: 'about-me', name: 'AboutMe', Component: AboutMe },
    { path: 'skills', name: 'Skills', Component: Skills },
    { path: 'blog', name: 'Blog', Component: Blog },
    { name: 'AboutMe', Component: AboutMe }
]