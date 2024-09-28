import React from 'react';
import Image from 'next/image';
import { FaTelegramPlane } from "react-icons/fa";

export default function NewsCard(props) {
    return (
        <div className='relative w-[90%] md:w-[89%] lg:w-[90%] mx-auto max-w-[400px] my-4 h-[76vh] md:h-[60vh] lg:h-[65vh] shadow-lg shadow-slate-400 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group'>
            
            {/* Image Section with Date on top */}
            <div className='relative w-full h-[50%] overflow-hidden'>
                <Image 
                    src={props.image} 
                    className='w-full cursor-pointer h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110' 
                    alt={`News about ${props.txt1}`} 
                />

                {/* Date Section on top of the Image */}
                <div className='absolute top-4 left-4  w-[25%] h-[70px] bg-[#00000090] text-[#D4B068] flex flex-col justify-center items-center rounded-br-md transform transition-transform duration-500  group-hover:scale-x-[-1]'>
                    <div className='transition-opacity duration-500 group-hover:opacity-0'>
                        <p className='text-lg font-bold'>07</p>
                        <p className='text-sm font-bold'>Jan</p>
                    </div>
                    <FaTelegramPlane className=' mt-[-45px]  text-[40px] text-[#D4B068] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                </div>
            </div>

            {/* Text Section */}
            <div className='flex flex-col h-[50%] px-4'>
                <div className='text-center'>
                    <h1 className='text-xl cursor-pointer md:text-lg sm:text-base xl:text-xl font-bold mt-4 mx-[10%] lg:mx-[15%] xl:mx-[20%]'>{props.txt1}</h1>
                    <p className='text-sm md:text-xs xl:text-sm font-sans text-[#7d7d7d] mt-2 mx-[5%] lg:mx-[8%] xl:mx-[10%]'>{props.txt2}</p>
                </div>

                {/* Link Section */}
                <div className='mt-auto mb-4 flex cursor-pointer justify-center'>
                    
                        <p className='button-2 mx-[5%] md:mx-[10%] lg:mx-[15%] xl:mx-[20%] text-center w-[90%] md:w-[80%] xl:w-[70%] hover:text-[#D4B068] text-[#7d7d7d] text-sm outline outline-1 py-2 px-2 hover:border-[#D4B068] border-[#000000]'>
                            Read More
                        </p>
                    
                </div>
            </div>
        </div>
    );
}
