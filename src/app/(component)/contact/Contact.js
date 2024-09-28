'use client'; // Add this line at the top

import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // State for loading

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setLoading(true); // Start loader

        try {
            const response = await fetch('/api1/contact', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`response status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData['message']);

            // Show success notification
            toast.success('Message successfully sent');

            // Clear input fields
            setName('');
            setEmail('');
            setNumber('');
            setMessage('');
        } catch (err) {
            console.error(err);
            // Show error notification
            toast.error('Error, please try resubmitting the form');
        } finally {
            setLoading(false); // Stop loader
        }
    };

    return (
        <>
            <ToastContainer /> {/* Toastify notifications */}
            <section id='contact-us' data-aos="fade-down">
                <form onSubmit={handleSubmit}>
                    <div id='clip-diagonal' className='w-full lg:h-[600px] h-[1250px] md:h-[1000px] sm:h-[1100px] bg-[#1F1F1F] text-white flex flex-col justify-center items-center'>
                        <h2 className='lg:text-[40px] md:text-[40px] sm:text-[35px] text-[30px] font-semibold tracking-2px mb-8'>Contact Us</h2>
                        <div className='flex flex-col lg:flex-row lg:justify-evenly md:w-full'>
                            <div className='lg:w-[21%] w-full text-[17px] text-[#787878] tracking-2px flex flex-col items-center lg:items-start px-4 mb-6 lg:mb-0'>
                                <FaLocationDot className='text-[#D4B068] text-[35px] mb-4' />
                                <p className='lg:mt-[10%] w-[85%] text-center lg:w-[100%] lg:text-left'>
                                    Tender Care Management City Gate, 246-250, Romford Road, London, E7 9HZ England. • Tel: 0208 555 9107 • Email: info@tendercarem.org • Web: www.tendercarem.org
                                </p>
                            </div>
                            <div className='w-full lg:w-[32%] lg:mt-[30px] flex flex-col items-center lg:items-start'>
                                <input
                                    className="bg-[#ffffff] w-[180px] px-2 py-3.5 sm:w-[280px] outline-none xl:w-[400px] lg:w-[320px] md:w-[300px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                                    name="name"
                                    required
                                    id="name"
                                    placeholder="Name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className="bg-[#ffffff] w-[180px] px-2 py-3.5 sm:w-[280px] outline-none xl:w-[400px] lg:w-[320px] md:w-[300px] lg:mt-[6%] md:mt-[3%] sm:mt-[2%] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="bg-[#ffffff] w-[180px] px-2 py-3.5 sm:w-[280px] outline-none xl:w-[400px] lg:w-[320px] md:w-[300px] md:mt-[3%] sm:mt-[2%] lg:mt-[6%] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                                    name="number"
                                    placeholder="Contact number"
                                    type="number"
                                    required
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-center w-full lg:w-[32%] lg:mt-[22px]'>
                                <textarea
                                    className="bg-white sm:h-[250px] px-2 sm:w-[280px] w-[180px] h-[200px] md:mt-[10px] lg:ml-[-120px] sm:mt-[20px] py-1 outline-none xl:w-[400px] lg:w-[280px] md:w-[300px] lg:h-[215px] md:h-[200px] text-black rounded-lg border-2 border-solid transition-colors duration-100 focus:border-[#D4B068] border-[#1F1F1F] resize-none"
                                    name="message"
                                    placeholder="Message"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`bg-[#78787881] text-white py-3 px-16 lg:px-40 md:px-[120px] sm:px-[110px] rounded-sm mt-4 transition-colors duration-200 hover:bg-[#868585cc] outline outline-1 focus:ring-2 focus:ring-[#fcfafa] focus:ring-opacity-50 mb-6 lg:ml-[270px] relative`}
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="loader" /> {/* Loader */}
                                    <span className="ml-2">Sending...</span> {/* Loader text */}
                                </div>
                            ) : (
                                <p className="font-bold">Submit</p>
                            )}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Contact;
