import React from 'react';
import CopyRight from '../../components/CopyRight';
import MyArticles from '../../components/MyArticles';
import PageTitle from '../../components/PageTitle';
import ScrollUpBtn from '../../components/ScrollUpBtn';

const Blog = () => {
    return (
        <div className='px-2 xl:px-20 2xl:px-52 pt-10 xl:pt-10'>
            <PageTitle title="Blogs" />
            <div className='text-white text-center'>
                <p style={{ textDecoration: 'none' }} className='text-[35px] font-bold'>A Blog About Web Developer And Life</p>
                <p style={{ textDecoration: 'none', color: '#02cfb4' }} className='text-[18px]'>Welcome to my blog.</p>
            </div>
            <MyArticles />
            <ScrollUpBtn />
            <br /><br /><br /><br />
            <CopyRight />
        </div>
    );
};

export default Blog;