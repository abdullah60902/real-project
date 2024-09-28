import React from 'react';
import Image from 'next/image';
import CareStafff from '@/app/public/img/care-staff.jpg';
import Mapcomponent from '@/app/(component)/mapcomponent/Mapcomponent';
import Nav2 from '@/app/(component)/nav2/Nav2';
import Footer from '@/app/(component)/footer/Footer';

export default function Page() {
    return (
        <>
            <Nav2 />

            <div className='bg-[#f7f7f7] clip-diagonal-CareStaff'>
                <div className='bg-[#f7f7f7]'>
                    {/* Background Banner Section */}
                    <div className='bg-[#777777] w-full h-[300px] md:h-[470px] clip-diagonal-staff'>
                        <div className='py-[10%] md:py-[15%]'>
                            <p className='text-[24px] md:text-[40px] text-center font-bold text-[#d4b068]'>
                                Domiciliary Care Staff
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='flex flex-col md:flex-row mx-[6%]'>
                        {/* Left Column (Image and Text) */}
                        <div className='clip-diagonal-img-staff'>
                            <div className='p-5 md:p-10'>
                                <div className='w-full md:w-[85%] bg-cover bg-white  p-5 md:p-7 my-5 md:my-10 h-auto md:h-[154vh]'>
                                    <Image 
                                        src={CareStafff} 
                                        alt="Care Staff" 
                                        className='w-full lg:mt-[140px] md:mt-[140px] sm:mt-[140px] mt-[130px] h-auto object-cover' 
                                        sizes="(max-width: 768px) 100vw, 
                                               (max-width: 1024px) 80vw, 
                                               50vw"
                                        priority
                                    />

                                    <div className='text-[#afa4a4] text-[12px] md:text-[14px] pt-5 md:pt-10'>
                                        <p className='text-[14px] md:text-[16px] font-extralight text-[#0000007c]'>
                                            We have a huge number of staff in our database covering
                                            a variety of specialities including the following:
                                        </p>
                                        <ul className='list-disc list-inside pt-3 md:pt-5'>
                                            <li>Healthcare Care Assistant</li>
                                            <li className='mt-2'>Support Workers</li>
                                            <li className='mt-2'>Senior Supports</li>
                                            <li className='mt-2'>Home Care Managers</li>
                                            <li className='mt-2'>Senior Carers</li>
                                            <li className='mt-2'>Clinical HCAs</li>
                                            <li className='mt-2'>Carer Supports</li>
                                            <li className='mt-2'>Nurses</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Blank Section) */}
                        <div className='h-[50px] md:h-[80px] w-[80%] md:w-[30%] bg-white mt-10 md:mt-20 clip-diagonal-blank ml-[-5%]' ></div>
                    </div>
                </div>

            </div>

            <div id='cliping' className='lg:w-[100%] w-full lg:h-[550px] h-auto md:h-auto sm:h-auto bg-white py-24'>
                <Mapcomponent />
            </div>

            <Footer />
        </>
    );
}
