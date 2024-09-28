import React from 'react';
import NursingStaf1 from '@/app/public/img/Nursing-Staff-1.png';
import { FaRegComments, FaTwitter, FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import Image from 'next/image';
import TCMRecruitmentclean from '@/app/public/img/Cleaning-Staff-2.jpg';
import Nav from '@/app/(component)/nav/Nav';
import Mapcomponent from '@/app/(component)/mapcomponent/Mapcomponent';
import Footer from '@/app/(component)/footer/Footer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <Nav />

            <div className='bg-[#f7f7f7]'>
                {/* Background section */}
                <div
                    className='h-[87vh] w-full bg-cover bg-center clip-diagonal relative'
                    style={{ backgroundImage: `url(${NursingStaf1.src})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
                >
                    {/* Overlay to darken the image */}
                    <div className='w-full h-[87vh] bg-[#0000009a]'>
                        {/* Responsive heading */}
                        <h1 className='text-2xl md:text-4xl font-bold text-[#dabc80] text-center flex justify-center items-center py-[50%] md:py-[18%]'>
                            TCM Recruitment
                        </h1>
                    </div>
                </div>

                {/* Breadcrumb section */}
                <div className='flex text-[13px] md:text-[15px] font-sans w-full justify-center mt-4 cursor-pointer'>
                    <Link href="/">  
                        <p className='text-[#7E7E7E] hover:text-[#dabc80]'>Home </p>
                    </Link>
                    <Link href="/TCM">  
                        <p className='text-[#dabc80]'>
                            <span className='text-[#7E7E7E] pr-2'>/</span> TCM Recruitment
                        </p>
                    </Link>
                </div>

                <div className='flex flex-col md:flex-row mx-[6%]'>
                    {/* Left Column (Image and Text) */}
                    <div className='clip-diagonal-TCM w-full md:w-[65%]'>
                        <div className='p-5 md:p-10 mt-16'>
                            <div className='bg-cover bg-white p-5 w-full md:w-[91%] my-5 h-auto'>
                                <p className='text-[#929292] text-center mt-[20%] mb-[5%] cursor-pointer'>
                                    <span className='text-[#929292] hover:text-[#D4B068]'>Uncategorized</span>
                                    <span className='text-[#929292]'>{'*'}</span>
                                    <span className='text-[#929292] hover:text-[#D4B068]'>January 7, 2020</span>
                                </p>

                                <p className='text-[#929292]'>
                                    We have a huge number of staff in our database covering a variety of specialities including the following:
                                </p>
                                <div className='flex justify-between my-[5%]'>
                                    <button className='flex items-center text-[#929292]'><FaRegComments />No Comments</button>
                                    <button className='flex items-center text-[#929292]'><FaRegComments />tendercarem</button>
                                </div>
                                <div className="flex items-center justify-center my-4">
                                    <div className="flex-1 border-t border-gray-300"></div>
                                    <div className="flex space-x-4 mx-4">
                                        <p className='bg-[#3b5998] h-7 w-7 text-white rounded-full flex justify-center items-center'> <FaFacebookF /></p>
                                        <p className='h-7 w-7 bg-[#55acee] text-white rounded-full flex justify-center items-center'><FaTwitter /></p>
                                        <p className='h-7 w-7 bg-[#25d366] text-white rounded-full flex justify-center items-center'><FaWhatsapp /></p>
                                        <p className='h-7 w-7 bg-[#0177b5] text-white rounded-full flex justify-center items-center'><FaLinkedinIn /></p>
                                    </div>
                                    <div className="flex-1 border-t border-gray-300"></div>
                                </div>
                                <p className='text-center text-[22px] font-bold my-[5%]'>You may also like this</p>
                                <div>
                                    <Image src={TCMRecruitmentclean} alt="Cleaning Staff" /> {/* Added alt prop */}
                                    <p className='text-[20px] font-semibold text-[#D4B068]'>Cleaning</p>
                                </div>

                                <div className='mt-[12%]'>
                                    <p className='font-bold text-[25px] text-[#929292]'>Leave a Reply</p>
                                    <p className='outline-1 outline-dashed w-full text-[#cccccc] my-[2%]'></p>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 rounded-[6px] border border-gray-300 focus:ring-[#d2ae67] focus:border-[#d2ae67] h-[140px] mt-10"></textarea>

                                    <label htmlFor="fName" className="block text-[#7E7E7E] text-md font-medium mt-10">Name *</label>
                                    <input type="text" className='block p-2.5 mt-2 w-[100%] md:w-[45%] h-[30px] text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-[#d2ae67] focus:border-[#d2ae67]' />

                                    <label htmlFor="Email" className="block text-[#7E7E7E] text-md font-medium mt-10">Email *</label>
                                    <input type="email" className='block p-2.5 mt-2 w-[100%] md:w-[45%] h-[30px] text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-[#d2ae67] focus:border-[#d2ae67]' />

                                    <label htmlFor="Website" className="block text-[#7E7E7E] text-md font-medium mt-10">Website</label>
                                    <input type="url" className='block p-2.5 mt-2 w-[100%] md:w-[45%] h-[30px] text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-[#d2ae67] focus:border-[#d2ae67]' />

                                    <button className='py-1.5 px-4 mt-10 text-[16px] font-sans outline outline-1 outline-[#0000009c] hover:outline-[#d2ae67] text-[#7E7E7E] hover:text-[#d2ae67]'>
                                        POST COMMENT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Blank Section) */}
                    <div className='h-[50px] md:h-[80px] w-full md:w-[30%] bg-white mt-10 md:mt-20 clip-diagonal-blank ml-[-5%]'></div>
                </div>
            </div>

            <div id='cliping' className='lg:w-[100%] w-full lg:h-[550px] h-auto md:h-auto sm:h-auto bg-white py-24'>
                <Mapcomponent />
            </div>

            <Footer />
        </>
    );
}
