import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

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
        return <p style={style}>Thanks for joining!</p>;
    }

    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <h1 className='text-white text-3xl md:text-5xl mb-5 mt-[-20px]"'>Connect With Me</h1>
            {state.errors.length > 0 && (
                <p style={error}>You cannot Submit Empty Form </p>
            )}
            <div className="w-full px-2 max-w-lg">
                <form onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">
                            Subject
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" name='subject' placeholder="Subject" />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='username' type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="text" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                            Message
                        </label>
                        <textarea
                            cols={10} rows={10}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name='message' type="text" placeholder="Your message" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Contacts;