"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import SupportWorkers from '@/app/public/img/Support-Workers-1.jpg';
import CleaningStaff from '@/app/public/img/Cleaning-Staff.jpg';
import NursingStaff from '@/app/public/img/Nursing-Staff-1.png';

const HeaderSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: SupportWorkers,
            text: 'Our vision is one of an inclusive society where diversity is respected and celebrated.',
        },
        {
            image: CleaningStaff,
            text: 'Tendercare Management Ltd is all about providing bespoke services to your requirements.',
        },
        {
            image: NursingStaff,
            text: 'Our mission is to be recognized as a leading provider of homecare and community support services.',
        }
    ];

    // Memoize the handleNextClick function to avoid re-creation on every render
    const handleNextClick = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    }, [slides.length]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 5000);

        return () => clearInterval(interval);
    }, [handleNextClick]); // Add handleNextClick as a dependency

    return (
        <div className="relative text-center mx-auto w-full h-screen clip-diagonal" data-aos="fade-up">
            {/* Image Slider */}
            <div
                className="relative h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${slides[currentIndex].image.src})`,
                    backgroundPosition: 'center', backgroundAttachment: 'fixed' 
                }}
            >
                {/* Content Layer */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#00000079] transition-opacity duration-500 ease-in-out">
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center w-full px-4 py-2">
                        <h2 className="text-[#d8dadb] text-[15px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-bold text-center w-[70%] sm:w-[70%] bg-opacity-50 rounded">
                            {slides[currentIndex].text}
                        </h2>
                    </div>

                    {/* Previous Button (Left) */}
                    <button
                        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 flex justify-center items-center h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 text-[#e2e7eb] p-2 focus:outline-none"
                        onClick={handlePrevClick}
                    >
                        <SlArrowLeft className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16' />
                    </button>

                    {/* Next Button (Right) */}
                    <button
                        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex justify-center items-center h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 text-[#e5eaee] p-2 focus:outline-none"
                        onClick={handleNextClick}
                    >
                        <SlArrowRight className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;
