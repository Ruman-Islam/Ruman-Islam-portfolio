import Home from "./pages/Home/Home";
import 'antd/dist/antd.css';
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Siderbar/Sidebar";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
