import { Route, Routes } from "react-router-dom";
import { nestedRoutes } from "./routes/nestedRoutes";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home/Home";
import 'antd/dist/antd.css';
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {

  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          {nestedRoutes.map(({ path, name, Component }, index) => (
            <Route key={index} path={path} index={name === 'Intro'} element={<Component />} />))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
