"use client";
import Head from "next/head";
import { FaLocationDot } from "react-icons/fa6";
import Mapcomponent from "../mapcomponent/Mapcomponent";
import Footer from "../footer/Footer";
import ScrollToTop from '@/app/(component)/scrolltotopp/ScroolToTop';
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from '@/app/public/img/logo1.jpg';

export default function Page() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    address: '',
    subject: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loader

    try {
      const formDataWithAttachment = {
        ...formData,
        attachment: {
          name: attachment?.name || '',
          data: attachment ? await readFile(attachment) : null,
          type: attachment?.type || '',
        },
      };

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithAttachment),
      });

      const result = await response.json();
      setIsLoading(false); // Stop loader
      if (response.ok) {
        toast.success("Form submitted successfully!", { position: "top-right" });
        setFormData({ name: '', email: '', message: '', phone: '', address: '', subject: '' });
        setAttachment(null); // Clear file input
      } else {
        toast.error(`Error: ${result.message}`, { position: "top-right" });
      }
    } catch (error) {
      setIsLoading(false); // Stop loader
      toast.error("Something went wrong. Please try again.", { position: "top-right" });
    }
  };

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result.split(',')[1]); // Get base64 string
      };
      reader.readAsDataURL(file);
    });
  };
 // startin nav................................................
 const [activeslide, setActiveslide] = useState(false);
 const [activeButton, setActiveButton] = useState('CAREER');
 const sidebarRef = useRef(null);

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

 // Updated navItems with links and section IDs
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
         // Scroll to the section after a slight delay
         setTimeout(() => {
             const sectionElement = document.querySelector(sectionId);
             if (sectionElement) {
                 sectionElement.scrollIntoView({ behavior: 'smooth' });
             }
         }, 100);
     } else {
         // Navigate directly if there's no section ID
         window.location.href = link;
     }
 };
  return (
    <>
    
      <ToastContainer /> {/* Toastify container for notifications */}
      <navbar>
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
                className={`sidebar lg:hidden w-[85%] h-full bg-[#ffffff] fixed top-0 z-[100] transition-all duration-[1s] ease-in-out ${activeslide ? 'left-0' : '-left-full'}`}
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
      </navbar>

      <div className="bg-[#F7F7F7] flex justify-center mt-13 items-start py-16 px-4 overflow-hidden">
        {/* Main Container */}
        <div className="bg-[#1F1F1F] max-w-5xl w-full p-6 md:p-10 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
            {/* Left Section - Text */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
                Apply For the Job
              </h1>
              <div className="border-t-4 border-[#ffffff] w-20 mb-4"></div>
              <div className="flex flex-col items-start gap-4 mb-6">
                <div className="bg-[#002a4800] w-10 h-10 flex items-center justify-center">
                  <FaLocationDot className="text-[#D4B068] text-[35px] mb-4" />
                </div>
                <div className="text-base md:text-lg text-[#ffffff]">
                  <p>
                    Tender Care Management City Gate, 246-250, Romford Road, London, E7 9HZ England. • Tel: 0208 555 9107 • Email: info@tendercarem.org • Web: www.tendercarem.org
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="lg:w-1/2">
              <div className="">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 p-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#ffffff] px-2 py-3.5 w-full text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#ffffff] px-2 py-3.5 w-full text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                  />
                  <input
                    type="number"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-[#ffffff] px-2 py-3.5 w-full text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder="Position Applying For"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="bg-[#ffffff] px-2 py-3.5 w-full text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                  />
                  <input
                    type="text"
                    name="startDate"
                    placeholder="When Can You Start?"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="bg-[#ffffff] px-2 py-3.5 w-full text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                  />
                  <textarea
                    name="message"
                    placeholder="Cover Letter"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-[#ffffff] px-2 py-3.5 w-full text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                  ></textarea>

                  {/* File Upload for CV */}
                  <div className="col-span-1">
                    <label className="block text-white text-sm font-semibold mb-2">
                      Upload CV
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="bg-[#ffffff] px-2 py-3.5 w-full text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#D4B068] border-[#1F1F1F]"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`bg-[#78787881] text-white font-bold py-3 px-6 w-full transition-colors duration-200 hover:bg-[#868585cc] outline outline-1 focus:ring-2 focus:ring-[#fcfafa] focus:ring-opacity-50 ${isLoading ? 'opacity-50' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'APPLY NOW'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer and Other Sections */}
      <div className="bg-[#F7F7F7] min-h-screen flex flex-col items-center">
        <Head>
          <title>Contact Us</title>
        </Head>
        <main className="flex flex-col items-center w-full">
          <div className="w-full py-12 flex flex-col md:flex-row justify-between items-center px-4 md:px-16"></div>

          <div id="cliping" className="lg:w-[100%] w-full lg:h-[550px] h-auto md:h-auto sm:h-auto bg-white py-24">
            <Mapcomponent />
          </div>
        </main>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
