import { Layout, Menu } from 'antd';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import profileImage from '../assets/profile-image.png';
import {
  HomeOutlined,
  ProjectOutlined,
  ContactsOutlined,
  ReadOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Content, Sider } = Layout;


const Sidebar = () => {
  return (
    <Layout>
      <Sider width={200}
        className='sider-style'
        breakpoint="lg"
        collapsedWidth="0">
        <div className='logo'>
          <img className='w-20' src={profileImage} alt="" />
          <h1 className='text-[#3CCF91]'>Mr. Ruman</h1>
        </div>
        <Menu theme='dark' className='menu-style' mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<HomeOutlined />}>
            <NavLink className='text-lg' to='/intro'>Intro</NavLink>
          </Menu.Item>
          <Menu.Item key='2' icon={<ProjectOutlined />}>
            <NavLink className='text-lg' to='/skills'>Skills</NavLink>
          </Menu.Item>
          <Menu.Item key='3' icon={<UnorderedListOutlined />}>
            <NavLink className='text-lg' to='/projects'>Projects</NavLink>
          </Menu.Item>
          <Menu.Item key='4' icon={<ContactsOutlined />}>
            <NavLink className='text-lg' to='/contacts'>Contacts</NavLink>
          </Menu.Item>
          <Menu.Item key='5' icon={<ReadOutlined />}>
            <NavLink className='text-lg' to='/blog'>Blog</NavLink>
          </Menu.Item>
          <Menu.Item key='6' icon={<UserOutlined />}>
            <NavLink className='text-lg' to='/about-me'>About me</NavLink>
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