import React from 'react';
import About from '../../components/About';
import MyArticles from '../../components/MyArticles';
import MyWorks from '../../components/MyWorks';
import PageTitle from '../../components/PageTitle';
import WhatIDo from '../../components/WhatIDo';
import WhatNext from '../../components/WhatNext';

const Intro = () => {
    return (
        <div className='p-2 2xl:px-52 md:px-20 flex flex-col h-full'>
            <PageTitle title="Intro" />
            <div className='light-border-bottom'>
                <About />
            </div>
            <div className='light-border-bottom'>
                <WhatIDo />
            </div>
            <div className='light-border-bottom'>
                <MyWorks />
            </div>
            <div className='light-border-bottom'>
                <div className='about my-10'>
                    <h1 className='title text-left'>Some Of My Articles</h1>
                    <div className='horizontal-line'></div>
                </div>
                <MyArticles />
            </div>
            <div >
                <WhatNext />
            </div>
        </div>
    );
};

export default Intro;