import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
// import useClock from "../hooks/useClock";
import DisplayContainer from "./DisplayContainer";
import MenuContainer from "./MenuContainer";
import ResumeButton from "./ResumeButton";
const { Content, Sider } = Layout;

const Sidebar = () => {
  // const { time } = useClock();
  return (
    <Layout>
      <Sider
        width={250}
        className="sider-style"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <DisplayContainer />
        <MenuContainer />
        <ResumeButton />
      </Sider>
      <Layout className="site-layout">
        <Content className="site-layout-background">
          {/* <div className="time-box">
            <div>{time}</div>
          </div> */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
