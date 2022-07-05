import React from 'react';
import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const MenuContainer = () => {
  const { pathname } = useLocation();

  return (
    <Menu theme='dark' className='menu-style' mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key='1'>
        <div className='h-full flex items-center'>
          <svg
            style={{
              color: `${pathname === '/' ? '#54B689' : 'white'}`
            }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-20 w-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
          <NavLink style={{ color: `${pathname === '/' ? '#54B689' : 'white'}` }}
            to='/'>Intro</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='2'>
        <div className='h-full flex items-center'>
          <svg
            style={{
              color: `${pathname.includes('/about-me') ? '#54B689' : 'white'}`
            }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" className="svg-inline--fa fa-user fa-w-20 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
          <NavLink style={{ color: `${pathname.includes('/about-me') ? '#54B689' : 'white'}` }}
            to='/about-me'>About me</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='3'>
        <div className='h-full flex items-center'>
          <svg style={{
            color: `${pathname.includes('/projects') ? '#54B689' : 'white'}`
          }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" className="svg-inline--fa fa-laptop-code fa-w-20 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
          <NavLink style={{ color: `${pathname === '/projects' ? '#54B689' : 'white'}` }}
            to='/projects'>Projects</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='4'>
        <div className='h-full flex items-center'>
          <svg
            style={{
              color: `${pathname.includes('/blog') ? '#54B689' : 'white'}`
            }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="blog" className="svg-inline--fa fa-blog fa-w-20 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path></svg>
          <NavLink style={{ color: `${pathname.includes('/blog') ? '#54B689' : 'white'}` }}
            to='/blog'>Blog</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='5'>
        <div className='h-full flex items-center'>
          <svg
            style={{
              color: `${pathname.includes('/contacts') ? '#54B689' : 'white'}`
            }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="id-card" className="svg-inline--fa fa-id-card fa-w-20 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"></path></svg>
          <NavLink style={{ color: `${pathname.includes('/contacts') ? '#54B689' : 'white'}` }}
            to='/contacts'>Contacts</NavLink>
        </div>
      </Menu.Item>
    </Menu>
  );
};

export default MenuContainer;