'use client'
import { useState, useEffect } from 'react';
import Nav from '@/app/(component)/nav/Nav';
import HeaderSlider from '@/app/(component)/header-slider/HeaderSlider';
import Contact from '@/app/(component)/contact/Contact';
import About from '@/app/(component)/about/About';
import ScrollToTop from '@/app/(component)/scrolltotopp/ScroolToTop';
import ResidentialCare from '@/app/(component)/residentialCare/RsidentialCare';
import Mapcomponent from '@/app/(component)/mapcomponent/Mapcomponent';
import Sliders2 from '@/app/(component)/sliders2/Sliders2';
import Services from '@/app/(component)/services/Services';
import LatestNews from '@/app/(component)/latest-news/LatestNews';
import Footer from '@/app/(component)/footer/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true); // State to manage loader visibility

  useEffect(() => {
    // Simulate a loading delay (replace with real logic if needed)
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1 second or when components are loaded
    },);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (loading) {
    return (
      /* Loader centered using flexbox */
      <div className="flex items-center justify-center h-screen">
        <div className="spinner grid grid-cols-4 gap-1 w-16 h-16">
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
          <div className="w-4 h-4 bg-yellow-500 animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section id='home'>
        <Nav />
        <HeaderSlider />
        <Services />
        <ResidentialCare />
        <About />
        <Sliders2 />
        <LatestNews />
        <Contact />
        <Mapcomponent />
        <Footer />
        <ScrollToTop />
      </section>
    </>
  );
}
