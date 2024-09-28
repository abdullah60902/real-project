import React from 'react'
import Image from 'next/image'
import bell from '@/app/public/img/bell.jpg'
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
                            Hospitality
                        </p>
                    </div>
                </div>

                <div className='flex justify-between flex-col md:flex-row mx-[6%]'>
                    {/* Left Column (Image and Text) */}
                    <div className='w-full md:w-[65%] pt-44 bg-white clip-diagonal-Hosipitaly'>
                        <div className='w-full p-3 md:p-10 text-[14px] md:text-[15px]  text-[#0000008c]  '>
                            <p className='text-justify'>
                                An essay service is a site or company that will write your essays for you. They usually will assign your assignment to a writer who specializes on your level of academic study and the subject.<a href='https://new-essays.net/college-essay-help/' className='cursor-pointer text-[#F0CD80]'> A reliable college essay writing service can help you get good grades while avoiding bad topics.</a>The company also provides free samples of writing that will help you evaluate their quality standards. Once you{'’'}re happy with the price then you{'’'}re able to proceed with your order. </p>

                            <Image src={bell} alt='Office Cleaning' className='w-full h-auto my-4' />

                            <p className='text-justify mt-4'>
                                The hospitality industry is intensely competitive, with new challenges arising every day. Sometimes it feels as if nothing is certain. But one thing you can be certain about is this: with Tendercare Management Ltd on your side, you’ll recruit the high-quality candidates who can help take your business from success to success. We already have an extensive database of experienced and talented hospitality professionals and we recruit new people daily to ensure we’re always able to fully support our clients with their requirements, whether you{'’'}re looking for one-day cover, a 12-month placement, or want to make the role more permanent.
                            </p>

                            <p className='text-justify mt-4'>
                                Our hospitality clients include hotels, catering companies. We have a great reputation for service and quality and a consistently high client retention rate.</p>
                        </div>

                        <div className='px-3 md:px-10 text-[14px]'>
                            <h2 className=' text-[20px] font-bold my-4 text-black'>We can provide:</h2>
                            <ul class="list-disc list-inside">
                                <li>Conference and events staff</li>
                                <li className='mt-2'>Waiting/Bar staff</li>
                                <li className='mt-2'>General assistants</li>
                                <li className='mt-2'>Kitchen/Event porters</li>
                                <li className='mt-2'>Supervisors</li>
                                <li className='mt-2'>Chambermaids</li>
                                <li className='mt-2'>Concierge</li>
                                <li className='mt-2'>Reception Staff</li>
                            </ul>

                            <p className='text-[14px] md:text-[15px] my-[5%]'>
                                We aim to provide first-class staff to the hospitality industry, and every member of our client support team has worked in the industry as well. We’re experts at providing the perfect candidates whenever you need them, and ensuring you{'’'}re fully staffed at all times. Contact us today to find out how we can help you.                            </p>
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
