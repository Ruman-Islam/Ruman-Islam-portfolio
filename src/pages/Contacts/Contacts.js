import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PageTitle from '../../components/PageTitle';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Contacts = () => {
    const [state, handleSubmit] = useForm('xzbowgvq');
    const style = {
        color: 'green',
        fontSize: '20px',
        padding: '10px',
        textAlign: 'center',
    };

    const error = {
        color: 'red',
        textAlign: 'center',
    };

    if (state.succeeded) {
        return <p style={style}>Thanks for email me. I will contact to you soon!</p>
    }

    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <PageTitle title="Contact" />
            <h1
                className='text-white text-3xl md:text-5xl mb-5 mt-[-20px] hidden md:block'>Connect With Me</h1>
            {state.errors.length > 0 && (
                <p style={error}>You cannot Submit Empty Form </p>
            )}
            <hr className='border-[#7F8487] border w-8/12 mb-10 hidden md:block' />
            <div className="w-full md:w-8/12 flex justify-between flex-col md:flex-row px-2">
                <div
                    className='text-white w-full text-center md:text-left'>
                    <h1 className='text-white text-[30px]'>Contact Info</h1>
                    <hr className='border-[#7F8487] border-1 w-8/12 mb-10 hidden md:block' />
                    <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                        <MailOutlined className='text-[#3CCF91] mr-2' />
                        <span>rumanislam0429@gmail.com</span>
                    </div>
                    <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                        <PhoneOutlined className='text-[#3CCF91] mr-2' />
                        <span>+880 153616-0661</span>
                    </div>
                    <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                        <EnvironmentOutlined className='text-[#3CCF91] mr-2' />
                        <span>Dhaka, Bangladesh</span>
                    </div>

                    <div className='social-icon-container-div flex justify-between w-6/12 md:w-3/12 m-auto md:ml-0'>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/zayedkhan.ruman">
                            <span className='social-icon'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10 w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                            </span>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ruman-islam-6a567016a/">
                            <span className='social-icon'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-10 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </span>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://github.com/Ruman-Islam">
                            <span className='social-icon'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-10 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            </span>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jawad.ruman/">
                            <span className='social-icon'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-10 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                            </span>
                        </a>

                    </div>
                </div>
                <form onSubmit={handleSubmit}
                    className="rounded px-8 pt-6 pb-8 mb-4 w-full">
                    <div className="mb-4">
                        <input autoComplete="off" className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="subject" type="text" name='subject' placeholder="Subject" />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <div className="mb-4">
                        <input autoComplete="off" className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="username" name='username' type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <input autoComplete="off" className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="email" name='email' type="text" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <textarea
                            cols={10} rows={5}
                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="message" name='message' type="text" placeholder="Your message" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-[#06283D] hover:bg-[#3CCF91] duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <hr className='border-[#7F8487] border w-8/12 mb-10 hidden md:block' />
        </div>
    );
};

export default Contacts;