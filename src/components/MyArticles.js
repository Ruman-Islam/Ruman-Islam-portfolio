import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import p1 from '../assets/article1.png';
import p2 from '../assets/article2.png';
import p3 from '../assets/article3.png';

const articles = [
    {
        title: 'Top 10 Chrome extensions',
        description: 'We all are familiar with Grammarly. If this extension is connected to your browser, it will show you the correct sentence whenever you make a mistake in grammar. Forgetting password is our common problem. LastPass extension will help you to get your password.',
        img: p1,
        date: '01 May 2021',
        link: 'https://galaxytech01.blogspot.com/2020/10/top-10-google-chrome-extensions-using.html'
    },
    {
        title: 'How can I live stream sports online at a low or no cost?',
        description: 'The internet is filled with free options for live streaming sports. With apps and downloads available for all of your devices, you will be able to watch the sport, tournament, or match from wherever you are. But there is a catch. Sports broadcasting rights constrict live streaming to specific locations. This implies depending on where you are located. You will be blocked from watching your favorite sports teams.',
        img: p2,
        date: '01 May 2021',
        link: 'https://galaxytech01.blogspot.com/2020/10/how-can-i-live-stream-sports-online-at.html'
    },
    {
        title: 'ড্রোন',
        description: ' বাংলাদেশ সেনাবাহিনীর জন্য মার্কিন যুক্তরাষ্ট্র থেকে RQ-12B WASP ড্রোন সিস্টেম ক্রয় করা হয়েছে যেগুলোর ডেলিভারী শীঘ্রই দেয়া হচ্ছে। Janes.com তাদের ওয়েবসাইটে প্রকাশিত তথ্য অনুসারে বাংলাদেশ সামরিকবাহিনীর জন্য অজানাসংখ্যক এরকম ড্রোন ডেলিভারী দিচ্ছে মার্কিন যুক্তরাষ্ট্র।এই ড্রোনগুলো intelligence, surveillance, target acquisition, and reconnaissance (ISTAR) SUAS বিবইধ অপারেশন',
        img: p3,
        date: '01 May 2021',
        link: 'https://galaxytech01.blogspot.com/2020/10/blog-post_14.html'
    },
]
const MyArticles = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className='flex flex-col text-white py-10 px-2 md:px-20 my-articles'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1 justify-items-center'>
                {articles.map((article, index) =>
                    <div key={index} className="text-white w-11/12 article">
                        <a target='_blank' rel='noreferrer' href={article.link}>
                            <div className='w-full h-44'>
                                <img className='w-full h-full' src={article.img} alt="" />
                            </div>
                            <div className='bg-[#1E2A3A] p-3'>
                                <div style={{ borderBottom: '1px solid hsla(0,0%,100%,.05)' }}>
                                    <p className='text-[18px] font-bold'>{article.title}</p>
                                    <p className='my-5 text-[#919DAE]'>{article.description.slice(0, 200)}...</p>
                                </div>
                                <div>
                                    <p className='text-right mt-2'>{article.date}</p>
                                </div>
                            </div>
                        </a>
                    </div>)}
            </div>
            {pathname.includes('/blog') || <div className='w-full flex justify-center mt-10'>
                <div onClick={() => navigate('/blog')}
                    className='border border-[#54B689] hover:bg-[#54B689] hover:text-white duration-300 flex items-center text-[#54B689] px-3 py-1'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg>
                    <button>See All Posts</button>
                </div>
            </div>}
        </div>
    );
};

export default MyArticles;