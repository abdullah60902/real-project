'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import logo from '@/app/public/img/logo1.jpg';

function Nav() {
    const [activeslide, setActiveslide] = useState(false);
    const [activeButton, setActiveButton] = useState('');
    const sidebarRef = useRef(null);

    const toggleMobileMenu = () => {
        setActiveslide((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setActiveslide(false);
            }
        };

        if (activeslide) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [activeslide]);

    const navItems = [
        { name: 'HOME', link: '/', sectionId: '#home' },
        { name: 'SERVICES', link: '/', sectionId: '#services' },
        { name: 'ABOUT US', link: '/', sectionId: '#about-us' },
        { name: 'OUR MISSION', link: '/', sectionId: '#our-mission' },
        { name: 'RECRUITMENT', link: '/', sectionId: '#recruitment' },
        { name: 'NEWS', link: '/', sectionId: '#news' },
        { name: 'CAREERS', link: '/career', sectionId: '#career' },
        { name: 'CONTACT US', link: '/', sectionId: '#contact-us' },
    ];

    const handleClick = (link, sectionId) => {
        if (sectionId) {
            setTimeout(() => {
                const sectionElement = document.querySelector(sectionId);
                if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.location.href = link;
        }
    };

    return (
        <>
        {/* Fixed Navbar */}
        <div className='bg-white h-[130px] w-full flex justify-center items-center z-50 fixed top-0'>
            <div className='w-[93%] flex justify-between items-center'>
                <Link href="/"><span><Image src={logo} alt='Logo' className='cursor-pointer sm:h-[88px] sm:w-[209px] h-[77px] w-[180px]' /></span></Link> 

                {/* Desktop Navigation */}
                <div className='hidden lg:flex pt-8 xl:w-[58%] justify-between lg:text-[10px] space-x-2 lg:space-x-6'>
                    {navItems.map(({ name, link, sectionId }) => (
                        <Link href={link} key={name} onClick={() => handleClick(link, sectionId)}>
                            <span
                                className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                                    ${activeButton === name ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                                    after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                                    ${activeButton === name ? 'after:w-full' : 'hover:after:w-full'}`}
                                onClick={() => setActiveButton(name)}
                            >
                                {name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Hamburger menu for mobile */}
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu} className='flex items-center text-[#726f6f] focus:outline-none'>
                        <span className='material-icons pt-8 text-[30px] text-[black]' >
                            {!activeslide && <GiHamburgerMenu />}
                            {activeslide && <ImCross className='text-[20px]' />}
                        </span>
                    </button>
                </div>
        
            </div>
        </div>

        {/* Mobile Sidebar */}
        <div 
            ref={sidebarRef} 
            className={`sidebar lg:hidden w-[85%] h-full bg-[#ffffff] fixed top-0 z-[100] transition-all duration-300 ease-in-out ${activeslide ? 'left-0' : '-left-full'}`}
        >
            <div className='flex flex-col justify-center cursor-pointer items-start p-4 space-y-4'>
                {navItems.map(({ name, link, sectionId }, index) => (
                    <Link href={link} key={index} onClick={() => handleClick(link, sectionId)} className='w-full'>
                        <div
                            className='group relative text-black hover:text-[white] text-left sm:text-lg text-sm w-full py-4 transition-all duration-300 ease-in-out hover:py-6 hover:bg-[#d4b068]'  
                            onClick={() => setActiveslide(false)}
                        >
                            <span className='group-hover:before:content-[""] ml-[10px] group-hover:before:absolute group-hover:before:bg-black group-hover:before:h-full group-hover:before:w-[3px] group-hover:before:left-0 group-hover:before:top-0 transition-all duration-200'></span>
                            {name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        {/* Content starts here with margin to avoid overlap */}
        <div className='pt-[130px]'>
            {/* Your page content goes here */}
        </div>
        </>
    );
}

export default Nav;
