import { Route, Routes } from "react-router-dom";
import { nestedRoutes } from "./routes/nestedRoutes";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home/Home";
import 'antd/dist/antd.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          {nestedRoutes.map(({ path, name, Component }, index) => (
            <Route key={index} path={path} index={name === 'Intro'} element={<Component />} />))}
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
