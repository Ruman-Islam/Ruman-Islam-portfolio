import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { nestedRoutes } from "./routes/nestedRoutes";
import 'antd/dist/antd.css';

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
