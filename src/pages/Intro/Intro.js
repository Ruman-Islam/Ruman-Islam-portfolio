import React from 'react';
import About from '../../components/About';
import MyWorks from '../../components/MyWorks';
import PageTitle from '../../components/PageTitle';
import WhatIDo from '../../components/WhatIDo';

const Intro = () => {
    return (
        <div className='p-2 2xl:px-40 md:px-20 flex flex-col h-full'>
            <PageTitle title="Intro" />
            <div style={{ borderBottom: '1px solid hsla(0,0%,100%,.05)' }}>
                <About />
            </div>
            <div style={{ borderBottom: '1px solid hsla(0,0%,100%,.05)' }}>
                <WhatIDo />
            </div>
            <div style={{ borderBottom: '1px solid hsla(0,0%,100%,.05)' }}>
                <MyWorks />
            </div>
        </div>
    );
};

export default Intro;