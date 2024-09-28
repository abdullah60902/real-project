import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import mapimg from '@/app/public/img/map.png';
import Image from 'next/image';
import { GrDirections } from "react-icons/gr";

export default function Mapcomponent() {
  return (
    <>
      <div  data-aos="fade-down" className="flex flex-col sm:flex-row justify-around items-start px-4 sm:px-10 py-4 sm:py-8 space-y-6 sm:space-y-0 sm:space-x-10">
        {/* Left Section - CQC Rating */}
        <div className="w-full sm:w-[40%] lg:w-[25%]">
          <h2 className="text-md sm:text-lg font-semibold text-gray-700 border-b-2 border-orange-300 pb-2">
            CQC Rating
          </h2>
          <div className="mt-4">
            <div className="relative border rounded-lg shadow-md p-4 bg-white border-gray-300 h-auto sm:h-[38vh]">
              {/* Corner Design - Top Right */}
              <div
                className="absolute top-1 right-1 h-[100px] sm:h-[140px] w-[100px] sm:w-[140px]"
                style={{
                  background: 'linear-gradient(45deg, transparent 50%, #f5f5f5 80%)',
                }}
              ></div>

              {/* Care Quality Commission Logo */}
              <div className="flex items-center mb-4">
                <Image
                  src={mapimg}
                  alt="Care Quality Commission"
                  className="w-[25%] sm:w-[35%] h-auto"
                />
              </div>
              

              {/* CQC Rating Details */}
              <div className="bg-[#f8f7f3] p-4 rounded-md shadow-sm">
                <p className="text-sm font-semibold text-gray-600">
                  CQC overall rating
                </p>
                <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2 flex items-center">
                  Good 
                  <span className="ml-2 text-green-600 text-xl sm:text-[33px]">●</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  18 November 2022
                </p>

                {/* See Report Button */}
                 <a href='https://www.cqc.org.uk/location/1-7680103385?referer=widget3'>
                <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-purple-700 font-semibold text-xs sm:text-sm rounded-sm hover:bg-purple-700 hover:text-white transition duration-300 sm:w-[110px] lg:w-[130px] lg:h-[4vh] sm:px-2">
                 <p className='sm:text-[10px] md:text-[10px]'>See the report </p>
                  <IoIosArrowForward />
                </button></a>
              </div>

              {/* Corner Design - Bottom Left */}
              <div
                className="absolute bottom-1 left-1 h-[100px] sm:h-[120px] w-[100px] sm:w-[120px]"
                style={{
                  background: 'linear-gradient(225deg, transparent 50%, #f5f5f5 110%)',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Section - Map */}
        <div className="relative w-full sm:w-[60%] lg:w-[65%] mx-auto">
  <h2 className="text-md sm:text-lg font-semibold text-gray-700 mb-2">
    Find us here
  </h2>

  <div className="border-t-2 border-orange-300 pt-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19849.757290505495!2d0.02252!3d51.545871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a722c5317305%3A0xa61bb8b8425eb95a!2sTendercare%20Management%20Ltd!5e0!3m2!1sen!2suk!4v1727347911894!5m2!1sen!2suk"
      width="100%"
      height="300"
      allowFullScreen=""
      loading="lazy"
      className="border border-gray-200 rounded-md"
    ></iframe>
  </div>

  {/* Direction Card */}
  <div className="absolute top-16 left-2 bg-white shadow-md rounded-md p-4 sm:w-[300px] sm:h-[150px] w-[250px] h-[150px] hidden sm:block">
    <h2 className="text-md font-semibold">Tendercare Management Ltd</h2>
    <p className="text-sm text-gray-600 mb-2">
      City Gate House, 246-250, Romford Rd, London E7 9HZ
    </p>
    <div className="flex justify-between items-center my-1">
      <div className="flex items-center">
        <span className="text-yellow-500">5.0</span>
        <span className="ml-1 text-yellow-500">★★★★★</span>
        <span className="text-xs ml-2 text-blue-500"><a href='https://www.google.com/search?hl=en-GB&gl=uk&q=Tendercare+Management+Ltd,+City+Gate+House,+246-250,+Romford+Rd,+London+E7+9HZ&ludocid=11969363536194222426&lsig=AB86z5Xba8LvlUIkKrrGl2I8TfqH&hl=en&gl=GB#lrd=0x47d8a722c5317305:0xa61bb8b8425eb95a,1' target='_blanck'>5 reviews</a></span>
      </div>
      <div className='mt-[-10px]'>

      <GrDirections className=' text-[#619DE5] ml-[15px] text-[20px] hover:text-[#172e4b] mt-[-12px]' />
      <a href="https://www.google.com/maps/dir//Tendercare+Management+Ltd+City+Gate+House+246-250,+Romford+Rd+London+E7+9HZ/@51.5458711,0.0225198,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47d8a722c5317305:0xa61bb8b8425eb95a" className="text-blue-500 hover:underline text-xs" target='_blanck'>
        Directions
      </a>
      </div>
    </div>
    <a href="https://www.google.com/maps/place/Tendercare+Management+Ltd/@51.545871,0.02252,14z/data=!4m6!3m5!1s0x47d8a722c5317305:0xa61bb8b8425eb95a!8m2!3d51.5458711!4d0.0225198!16s%2Fg%2F11h4ff91jh?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D" className="text-blue-500 hover:underline text-xs" target='_blanck'>
      View larger map
    </a>
  </div>
</div>
      </div>
    </>
  );
}
