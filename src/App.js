import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import 'antd/dist/antd.css';

const nestedRoutes = [
  { name: 'AboutMe', Component: AboutMe },
  { path: 'about-me', name: 'AboutMe', Component: AboutMe },
  { path: 'skills', name: 'Skills', Component: Skills },
  { path: 'projects', name: 'Projects', Component: Projects },
  { path: 'contacts', name: 'Contacts', Component: Contacts },
  { path: 'blog', name: 'Blog', Component: Blog }
]

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {nestedRoutes.map(({ path, name, Component }, index) => (
          <Route key={index} path={path} index={name === 'AboutMe'} element={<Component />} />))}
      </Route>
    </Routes>
  );
}

export default App;
