import React from 'react';

function Footer() {
  return (
    <>
      {/* Diagonal Background Clip */}
      <div id="clip-diagonals" className="bg-[#1F1F1F] h-[80px] w-full"></div>
<div className='bg-[#1F1F1F]'>

      {/* Footer Main Section */}
      <div className="bg-[#1F1F1F] h-[120px] mt-[-12px] w-full flex items-center justify-center">
        <div className="w-[90%] mt-24 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Social Media Icons */}
          <div>
            <ul className="flex space-x-4">
              <li className="icon facebook">
                <a
                  href="https://www.facebook.com/profile.php?id=100068731942449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:text-blue-500"
                  >
                  <svg
                    viewBox="0 0 320 512"
                    height="20px"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
              </li>

              <li className="icon twitter">
                <a
                  href="https://x.com/tendercarem_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:text-blue-400"
                  >
                  <svg
                    viewBox="0 0 48 48"
                    height="20px"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Designed By Section */}
          <div className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[160px]">
            <a href="https://www.mdssupport.co.uk" target="blank">
              <p className="text-white text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                Designed by MDS
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#1F1F1F] h-[60px] flex items-center justify-center text-white">
        <p className="text-[10px] mt-5 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-center">
          Copyrights © 2020 Tender Care Management LTD. All rights reserved
        </p>
      </div>

                    </div>
      {/* Footer Bottom Section */}
    </>
  );
}

export default Footer;
