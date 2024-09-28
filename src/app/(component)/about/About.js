import React from 'react';

const About = () => {
    return (
        <>
            {/* About Us Section */}
            <section id='about-us' data-aos="fade-down">
                <div data-aos="fade-up" id='clip-diagonal' className='w-full lg:h-[650px] h-[1280px] md:h-[830px] sm:h-[1200px] bg-[#6F6F6F] text-white flex flex-col justify-center items-center'>
                    <div className='w-full flex justify-center'>
                        <h2 className='text-left sm:py-10 py-8 md:py-16 lg:py-20 text-[28px] lg:text-[40px] lg:mt-[-90px] md:mt-[-110px] mt-[-110px] font-semibold tracking-wide mb-8'>
                            About Us
                        </h2>
                    </div>
                    <div className='w-[90%] lg:w-[80%] mx-auto mt-[-60px] lg:mt-[-100px] text-left'>
                        <p className='text-[13px] sm:text-[17px] py-4 md:text-[18px] lg:text-[18px] leading-relaxed'>
                            Our vision is to be recognised as a leading provider of staffing solutions for a range of businesses in addition to providing care services to private clients. We also provide other ranges of services. To achieve this, Tendercare Management Limited provides a range of quality community care and support services for vulnerable people from various backgrounds and communities living in London.
                            <br /><br />
                            We have a pool of staff with experience ranging between 5 to 15 years, with specialist options for culturally appropriate care and support, and a genuine commitment towards helping people to live a happier and more independent life in the comfort of their own home and community.
                            <br /><br />
                            We also provide staffing solutions to other sectors such as hospitality, cleaning, and care. Our staff&apos;s experience ranges between 5 to 20 years. Due to our client portfolio, we offer some of the best rates in the industry, maintaining core values of good, timely, and reliable service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section id='our-mission'>
    <div data-aos="fade-up" className="w-full px-6 lg:px-24 py-12 bg-white">
        <div className="text-left mb-16">
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold mb-4">Our Mission</h2>
            <hr className="border-t-[1px] border-gray-300 w-full md:w-[95%] lg:w-[95%] mb-6" />
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-[1200px]">
                Our mission is to be recognised as a leading provider of homecare and community support services aimed at enhancing the quality of life for vulnerable people in London and surrounding counties, whilst promoting diversity, quality learning opportunities, and the overall well-being of the local communities we serve.
            </p>
        </div>

        <div className="text-left">
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold mb-4">Our Vision</h2>
            <hr className="border-t-[1px] border-gray-300 w-full md:w-[95%] lg:w-[95%] mb-6" />
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-[1200px]">
                Our vision is an inclusive society where diversity is respected and celebrated. For Tendercare, this means treating every client with dignity and respect, while offering them real choices and opportunities. We blend responsive care with commitment to individualised services to meet each person&apos;s needs and aspirations.
            </p>
        </div>
    </div>
</section>

        </>
    );
};

export default About;
