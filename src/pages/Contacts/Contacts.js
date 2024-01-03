import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PageTitle from '../../components/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import CopyRight from '../../components/CopyRight';

const Contacts = () => {
    const [state, handleSubmit] = useForm('xzbowgvq');

    if (state.succeeded) {
        return <div className='email-confirm-container display-flex'>
            <p >Thanks for email me. I will contact to you soon!</p>
        </div>
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center h-[90vh] pt-5'>
                <PageTitle title="Contact" />


                <div className="w-full md:w-8/12 flex justify-between flex-col md:flex-row px-2 light-border-bottom">
                    <div
                        className='text-white w-full text-center md:text-left'>
                        <h1 className='text-[#02cfb4] text-[30px]'>Contact Info</h1>
                        <hr className='border-[#7F8487] border-1 w-8/12 mb-10 hidden md:block' />
                        <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                            <FontAwesomeIcon icon={faEnvelope} className='item text-[#02cfb4] mr-2' />
                            <span>rumanislam0429@gmail.com</span>
                        </div>
                        <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                            <FontAwesomeIcon icon={faPhone} className='item text-[#02cfb4] mr-2' />
                            <span>+880 153616-0661</span>
                        </div>
                        <div className='flex items-center my-4 text-[18px] justify-center md:justify-start'>
                            <FontAwesomeIcon icon={faMapMarker} className='item text-[#02cfb4] mr-2' />
                            <span>Dhaka, Bangladesh</span>
                        </div>

                        <div className='social-icon-container-div flex justify-between w-6/12 md:w-3/12 m-auto md:ml-0'>
                            {/* <a target="_blank" rel="noreferrer" href="https://www.facebook.com/zayedkhan.ruman">
                                <span className='social-icon display-flex mr-2.5'>
                                    <FontAwesomeIcon icon={faFacebookF} className='item' />
                                </span>
                            </a> */}

                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ruman-islam-6a567016a/">
                                <span className='social-icon display-flex mr-2.5'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='item' />
                                </span>
                            </a>

                            <a target="_blank" rel="noreferrer" href="https://github.com/Ruman-Islam">
                                <span className='social-icon display-flex mr-2.5'>
                                    <FontAwesomeIcon icon={faGithub} className='item' />
                                </span>
                            </a>

                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jawad.ruman/">
                                <span className='social-icon display-flex mr-2.5'>
                                    <FontAwesomeIcon icon={faInstagram} className='item' />
                                </span>
                            </a>

                        </div>
                    </div>
                    <form onSubmit={handleSubmit}
                        className="rounded px-8 pt-6 pb-8 mb-4 w-full">
                        <div className="mb-4">
                            <input autoComplete="off" className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="subject" type="text" name='subject' placeholder="Subject" />
                        </div>
                        <ValidationError prefix="Name" field="name" errors={state?.errors} />
                        <div className="mb-4">
                            <input autoComplete="off" className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-white leading-tight outline-none focus:shadow-outline bg-[#06283D]" id="username" name='username' type="text" placeholder="Your name" />
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
                            <button className="bg-[#06283D] hover:bg-[#02cfb4] duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Submit
                            </button>
                        </div>
                        {state?.errors?.length > 0 && (
                            <p className='error-confirm-text'>You cannot submit empty form </p>
                        )}
                    </form>
                </div>
            </div>
            <CopyRight />
        </>
    );
};

export default Contacts;