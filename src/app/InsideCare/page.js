import React from 'react'
import Image from 'next/image'
import old from '@/app/public/img/old.jpg'
import Nav2 from '@/app/(component)/nav2/Nav2';
import Mapcomponent from '@/app/(component)/mapcomponent/Mapcomponent'
import Footer from '@/app/(component)/footer/Footer';
export default function page() {
    return (
        <>
            <Nav2 />

            <div className='bg-[#f7f7f7] text-[#929292] font-extralight'>
                <div className='bg-[#777777] w-full h-[300px] md:h-[470px] clip-diagonal-staff'>
                    <div className='py-[10%] md:py-[15%]'>
                        <p className='text-[24px] md:text-[40px] text-center font-bold text-[#d4b068]'>
                            Residential Care
                        </p>
                    </div>
                </div>

                <div className='flex justify-between flex-col md:flex-row mx-[6%]'>
                    {/* Left Column (Image and Text) */}
                    <div className='w-full md:w-[65%] pt-44 bg-white clip-diagonal-Hosipitaly'>
                        <div className='w-full p-3 md:p-10 text-[14px] md:text-[15px]  text-[#0000008c]  '>
                            <p className='text-justify'>
                            If you are in need of help on an essay, consider using an essay service. These services are affordable and provide high quality writing.<a href='https://writing-essays.org/cheap-essay-writing/' className='cursor-pointer text-[#F0CD80]'>.The first step in your cheap custom essay writing process is to think about the topic or question you are going to address.</a>It is best to look for companies which have been in operation for a while. It should be reliable and offer a money-back assurance or a quality warranty.</p>

                            <Image src={old} alt='Office Cleaning' className='w-full h-auto my-4' />

                            <p className='text-justify mt-4'>
                            At TCM Care, our philosophy adopts the person-centred approach, so when delivering day-to-day care practice, the identity of an individual is at the centre of what we do. As a result of fostering a model of care that looks at the ‘whole person’ – and not a person’s ability or medical capacity; TCM Care continues to uphold a commitment to offering peace of mind to both an individual and their family alike. </p>

                            <p className='text-justify mt-4'>
                            Each TCM Care Home provides a place where individuals can flourish within a supportive and enabling environment: one that offers friendship, an enriching engagement programme, and the opportunity to maintain links with the wider community. </p>
                            <p className='text-justify mt-4'>
                            Furthermore, each member of staff at TCM Care is committed to delivering a service that knows more than just an individual’s name and face. With the support of a bespoke initial assessment, use of Person Centred Software (Mobile Care Monitoring) – an intelligent mobile solution for care planning, reporting and care interactions – and ongoing reviews and evaluations regarding a person’s priorities and preferences, staff can continue to deliver the highest quality of care in line with the company’s over-arching person-centred philosophy as well as providing staffing solutions to private care homes across London. </p>
                            
                              </div>

                        <div className='px-3 md:px-10 text-[14px]'>
                            <ul class="list-disc list-inside">
                                <li className='mt-2'>Healthcare Care Assistant</li>
                                <li className='mt-2'>Support Workers</li>
                                <li className='mt-2'>Home Care Managers</li>
                                <li className='mt-2'>Senior Carers</li>
                                <li className='mt-2'>Clinical HCAs</li>
                                <li className='mt-2'>Carer Supports</li>
                                <li className='mt-2'>Nurses</li>
                            </ul>

                        </div>
                    </div>

                    {/* Right Column (Blank Section) */}
                    <div
                        id="clipings"
                        className="hidden lg:flex w-[25%] lg:h-[60px] h-[40px] bg-white text-[#D4B068] flex-col justify-center items-center mt-[30px]"
                    ></div>                </div>


                <div id='cliping' className='lg:w-[100%] w-full lg:h-[550px] h-auto md:h-auto sm:h-auto bg-white py-24  '>
                    <Mapcomponent />
                </div>

                <Footer />
            </div>
        </>
    )
}
