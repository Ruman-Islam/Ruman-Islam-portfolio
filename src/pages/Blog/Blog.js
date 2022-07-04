import React from 'react';
import MyArticles from '../../components/MyArticles';
import PageTitle from '../../components/PageTitle';

const Blog = () => {
    return (
        <div className='px-2 xl:px-44 py-10 xl:py-20'>
            <PageTitle title="Blogs" />
            <div className='text-white text-center'>
                <p className='text-[35px] font-bold'>A Blog About Web Developer And Life</p>
                <p className='text-[18px]'>Welcome to my blog.</p>
            </div>
            <MyArticles />
        </div>
    );
};

export default Blog;