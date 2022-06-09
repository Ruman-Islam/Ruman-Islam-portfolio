import { Layout, Menu } from 'antd';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import profileImage from '../assets/profile-image.png';
import {
  HomeOutlined,
  ProjectOutlined,
  ContactsOutlined,
  ReadOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
const { Content, Sider } = Layout;


const Sidebar = () => {
  return (
    <Layout>
      <Sider width={250}
        className='sider-style'
        breakpoint="lg"
        collapsedWidth="0">
        <div className="logo">
          <img src={profileImage} alt="" />
        </div>
        <Menu theme='dark' className='menu-style' mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<HomeOutlined />}>
            <NavLink className='text-xl' to='/about-me'>Home</NavLink>
          </Menu.Item>
          <Menu.Item key='2' icon={<ProjectOutlined />}>
            <NavLink className='text-xl' to='/skills'>Skills</NavLink>
          </Menu.Item>
          <Menu.Item key='3' icon={<UnorderedListOutlined />}>
            <NavLink className='text-xl' to='/projects'>Projects</NavLink>
          </Menu.Item>
          <Menu.Item key='4' icon={<ContactsOutlined />}>
            <NavLink className='text-xl' to='/contacts'>Contacts</NavLink>
          </Menu.Item>
          <Menu.Item key='5' icon={<ReadOutlined />}>
            <NavLink className='text-xl' to='/blog'>Blog</NavLink>
          </Menu.Item>
        </Menu>
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