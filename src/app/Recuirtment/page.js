import React from 'react';
import Nav2 from '@/app/(component)/nav2/Nav2';
import Image from 'next/image';
import meeting from '@/app/public/img/meeting.jpg';
import Mapcomponent from '@/app/(component)/mapcomponent/Mapcomponent'
import Footer from '@/app/(component)/footer/Footer';


const Page = () => {
    return (
        <>
                <Nav2 />

            <section className="bg-[#F7F7F7]">
                <div
                    id="clip"
                    className="w-full lg:h-[450px] h-[480px] md:h-[450px] sm:h-[450px] bg-[#6F6F6F] text-[#D4B068] flex flex-col justify-center items-center"
                >
                    <h2 className="lg:text-[40px] md:text-[35px] sm:text-[30px] text-[30px] font-bold">
                        Recruitment
                    </h2>
                </div>

                <div className="w-full flex flex-wrap justify-around px-5">
                    <div
                        id="cliping"
                        className="lg:w-[65%] w-full lg:h-[1050px] h-auto md:h-auto sm:h-auto bg-white text-black flex flex-col justify-center items-center p-4"
                    >
                        <Image
                            src={meeting}
                            alt="Meeting"
                            className="py-9 lg:mt-9 mt-10 lg:w-[750px] md:w-[500px] sm:w-[400px] w-[300px]"
                        />

                        <p className="lg:w-[95%] w-full mt-5">TCM Ltd works with a range of businesses
                            in and around London and surrounding areas,
                            from SMEs through to larger organisations.</p>
                        <p className="lg:w-[95%] w-full mt-5">Our London recruitment agency sources business support
                            staff for a range of industries and sectors.</p>
                        <p className="lg:w-[95%] w-full mt-5">Get in touch to find out more.</p>
                        <p className="lg:w-[95%] w-full mt-5">
  Essays can be described as a form of writing which provides explanation and
  arguments on certain subjects. The most well-known type of academic writing
  may be utilized to help professionals and students be able to communicate
  clearly and effectively.
  <a
    href="https://essaysonline.org/" // Replace with your desired URL
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#D4B068] cursor-pointer"
  >
    When it comes to the best essay writing service, you need to choose a reliable site that has been in business for years.
  </a>
  You should use an affordable service for assistance when writing essays. They will ask for details, such as the kind of essay you want to write and the page count. Then they provide you with a cost estimation.
</p>

                    </div>

                    <div
                        id="clipings"
                        className="hidden lg:flex w-[25%] lg:h-[60px] h-[40px] bg-white text-[#D4B068] flex-col justify-center items-center mt-[-30px]"
                    ></div>

                </div>
                    <div id='cliping' className='lg:w-[100%] w-full lg:h-[550px] h-auto md:h-auto sm:h-auto bg-white py-24  '>
                    <Mapcomponent/>
                    </div>

                    <Footer/>
            </section>
        </>
    );
};

export default Page;
