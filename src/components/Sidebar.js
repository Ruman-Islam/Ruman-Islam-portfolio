import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DisplayContainer from './DisplayContainer';
import MenuContainer from './MenuContainer';
import ResumeButton from './ResumeButton';
const { Content, Sider } = Layout;

const Sidebar = () => {
  const year = new Date().getFullYear();

  return (
    <Layout>
      <Sider width={250}
        className='sider-style'
        breakpoint="xl"
        collapsedWidth="0">
        <DisplayContainer />
        <MenuContainer />
        <ResumeButton />
        <p className='no-underline mt-36 text-center'>
          <span className='text-[#54B67F] text-[15px]'>Ruman Islam</span> | © {year}
        </p>
        <br />
      </Sider>
      <Layout
        className="site-layout">
        <Content
          className='site-layout-background'
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;