'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '@/app/public/img/logo1.jpg';
import Link from 'next/link';

function Nav() {
    const [activeslide, setActiveslide] = useState(false);
    const [activeButton, setActiveButton] = useState('HOME');
    const sidebarRef = useRef(null);

    const sectionIds = ['home', 'services', 'about-us', 'our-mission', 'recruitment', 'news', 'contact-us'];

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setActiveslide(false);

        const section = document.getElementById(buttonName.toLowerCase().replace(' ', '-'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMobileMenu = () => {
        setActiveslide(!activeslide);
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

    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = 'HOME';

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop - 150;
                    if (window.scrollY >= sectionTop) {
                        currentSection = id.replace('-', ' ').toUpperCase();
                    }
                }
            });

            setActiveButton(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
        <div className='bg-white h-[130px] w-full flex justify-center items-center z-50 fixed top-0' data-aos="fade-down">
            <div className='w-[93%] flex justify-between items-center'>
                <Link href="/">
                    <Image src={logo} alt='Logo' className='cursor-pointer sm:h-[88px] sm:w-[209px] h-[77px] w-[180px]' />
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex pt-8 xl:w-[62%] justify-between lg:text-[10px] space-x-2 lg:space-x-6'>
                    <div
                        className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                            ${activeButton === 'HOME' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                            after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                            ${activeButton === 'HOME' ? 'after:w-full' : 'hover:after:w-full'}`}
                        onClick={() => handleButtonClick('HOME')}
                    >
                        HOME
                    </div>
                    <div
                        className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                            ${activeButton === 'SERVICES' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                            after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                            ${activeButton === 'SERVICES' ? 'after:w-full' : 'hover:after:w-full'}`}
                        onClick={() => handleButtonClick('SERVICES')}
                    >
                        SERVICES
                    </div>
                    <div
                        className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                            ${activeButton === 'ABOUT US' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                            after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                            ${activeButton === 'ABOUT US' ? 'after:w-full' : 'hover:after:w-full'}`}
                        onClick={() => handleButtonClick('ABOUT US')}
                    >
                        ABOUT US
                    </div>
                    <div
                        className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                            ${activeButton === 'OUR MISSION' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                            after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                            ${activeButton === 'OUR MISSION' ? 'after:w-full' : 'hover:after:w-full'}`}
                        onClick={() => handleButtonClick('OUR MISSION')}
                    >
                        OUR MISSION
                    </div>
                    <div
                        className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                            ${activeButton === 'RECRUITMENT' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                            after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                            ${activeButton === 'RECRUITMENT' ? 'after:w-full' : 'hover:after:w-full'}`}
                        onClick={() => handleButtonClick('RECRUITMENT')}
                    >
                        RECRUITMENT
                    </div>
                    <div
                        className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                            ${activeButton === 'NEWS' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                            after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                            ${activeButton === 'NEWS' ? 'after:w-full' : 'hover:after:w-full'}`}
                        onClick={() => handleButtonClick('NEWS')}
                    >
                        NEWS
                    </div>
                        <Link href="/career">
                            <div
                                className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                                    ${activeButton === 'CAREER' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                                    after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                                    ${activeButton === 'CAREER' ? 'after:w-full' : 'hover:after:w-full'}`}
                                onClick={() => handleButtonClick('CAREER')}
                            >
                                CAREERS
                            </div>
                        </Link>
                    <div
                        className={`relative cursor-pointer font-semibold tracking-normal text-[13px] 
                            ${activeButton === 'CONTACT US' ? 'text-[#d4b068]' : 'text-[#726f6f]'} 
                            after:content-[""] after:absolute after:bg-[#d4b068] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                            ${activeButton === 'CONTACT US' ? 'after:w-full' : 'hover:after:w-full'}`}
                        onClick={() => handleButtonClick('CONTACT US')}
                    >
                        CONTACT US
                    </div>
                </div>

                {/* Hamburger menu for mobile */}
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu} className='flex items-center text-[#726f6f] focus:outline-none'>
                        <span className='material-icons pt-8 text-[30px] text-[black]' >
                            {!activeslide ? <GiHamburgerMenu /> : <ImCross className='text-[20px]' />}
                        </span>
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Sidebar */}
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
