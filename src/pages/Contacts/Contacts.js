import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PageTitle from '../../components/PageTitle';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';

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
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="2000"
                className='text-white text-3xl md:text-5xl mb-5 mt-[-20px] hidden md:block'>Connect With Me</h1>
            {state.errors.length > 0 && (
                <p style={error}>You cannot Submit Empty Form </p>
            )}
            <hr className='border-[#7F8487] border w-8/12 mb-10 hidden md:block' />
            <div className="w-full md:w-8/12 flex justify-between flex-col md:flex-row px-2">
                <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    className='text-white w-full text-center md:text-left'>
                    <h1 className='text-white text-[30px]'>Contact Info</h1>
                    <hr className='border-[#7F8487] border-1 w-8/12 mb-10 hidden md:block' />
                    <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                        <MailOutlined className='text-[#3CCF91] mr-2' />
                        <span>rumanislam0429@gmail.com</span>
                    </div>
                    <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                        <PhoneOutlined className='text-[#3CCF91] mr-2' />
                        <span>+8801536160661</span>
                    </div>
                    <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                        <EnvironmentOutlined className='text-[#3CCF91] mr-2' />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                    <div>
                        <ul className='social-icon-container'>
                            <li>
                                <a
                                    className='social-icon'
                                    type='button' target="_blank" rel="noopener noreferrer"
                                    href='https://github.com/Ruman-Islam' >
                                    <GithubFilled className='absolute left-0 top-[-5px] text-3xl' />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-icon'
                                    type='button' target="_blank" rel="noopener noreferrer"
                                    href='https://www.facebook.com/zayedkhan.ruman' >
                                    <FacebookFilled className='absolute left-0 top-[-5px] text-3xl' />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-icon'
                                    type='button' target="_blank" rel="noopener noreferrer"
                                    href='https://www.linkedin.com/in/ruman-islam-6a567016a/' >
                                    <LinkedinFilled className='absolute left-0 top-[-5px] text-3xl' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form onSubmit={handleSubmit}
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    className="rounded px-8 pt-6 pb-8 mb-4 w-full">
                    <div className="mb-4">
                        <input className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="subject" type="text" name='subject' placeholder="Subject" />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <div className="mb-4">
                        <input className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="username" name='username' type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="email" name='email' type="text" placeholder="Email" />
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