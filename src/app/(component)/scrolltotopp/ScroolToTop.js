'use client';
import React, { useState, useEffect } from 'react';
import { IoMdArrowDropup } from "react-icons/io";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the page back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10">
                    <button
                        onClick={scrollToTop}
                        className="p-2 sm:p-3 rounded-sm border-2 border-[#c2a257] text-[#c2a257] text-base sm:text-lg shadow-md transition duration-300 hover:bg-[#c2a257] hover:text-white outline-none focus:outline-none focus:ring-2 focus:ring-[#c2a257] focus:ring-opacity-50"
                    >
                        <IoMdArrowDropup />
                    </button>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
