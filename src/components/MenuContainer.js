import React from 'react';
import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faUser, faLaptopCode, faBlog, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const MenuContainer = () => {
  const { pathname } = useLocation();

  return (
    <Menu theme='dark' className='menu-style' mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key='1'>
        <div className='h-full flex items-center '>
          <FontAwesomeIcon icon={faHouseUser} className='w-5' style={{
            color: `${pathname === '/' ? '#54B689' : 'white'}`
          }} />
          <NavLink style={{ color: `${pathname === '/' ? '#54B689' : 'white'}` }}
            to='/'>Home</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='2'>
        <div className='h-full flex items-center'>
          <FontAwesomeIcon icon={faUser} className='w-5' style={{
            color: `${pathname === '/about-me' ? '#54B689' : 'white'}`
          }} />
          <NavLink style={{ color: `${pathname.includes('/about-me') ? '#54B689' : 'white'}` }}
            to='/about-me'>About me</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='3'>
        <div className='h-full flex items-center'>
          <FontAwesomeIcon icon={faLaptopCode} className='w-5' style={{
            color: `${pathname === '/projects' ? '#54B689' : 'white'}`
          }} />
          <NavLink style={{ color: `${pathname === '/projects' ? '#54B689' : 'white'}` }}
            to='/projects'>Projects</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='4'>
        <div className='h-full flex items-center'>
          <FontAwesomeIcon icon={faBlog} className='w-5' style={{
            color: `${pathname === '/blog' ? '#54B689' : 'white'}`
          }} />
          <NavLink style={{ color: `${pathname.includes('/blog') ? '#54B689' : 'white'}` }}
            to='/blog'>Blog</NavLink>
        </div>
      </Menu.Item>
      <Menu.Item key='5'>
        <div className='h-full flex items-center'>
          <FontAwesomeIcon icon={faAddressCard} className='w-5' style={{
            color: `${pathname === '/contacts' ? '#54B689' : 'white'}`
          }} />
          <NavLink style={{ color: `${pathname.includes('/contacts') ? '#54B689' : 'white'}` }}
            to='/contacts'>Contacts</NavLink>
        </div>
      </Menu.Item>
    </Menu>
  );
};

export default MenuContainer;