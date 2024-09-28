"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import old from '@/app/public/img/old.jpg';
import care from '@/app/public/img/care.jpg';
import nursing from '@/app/public/img/Nursing Staff (1).jpg';
import hospitality from '@/app/public/img/TCM Hospitality image  (1).jpg';
import cleaning from '@/app/public/img/Cleaning-Staff.jpg';

export default function Sliders2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [newHeading, setNewHeading] = useState(false);

  useEffect(() => {
    const currentHeading = currentIndex === 4 ? "Cleaning" : null;
    setNewHeading(!!currentHeading);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentIndex + 1) % 5); // since we have 5 slides
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id='recruitment'>
      <div id="imgo" className="bg-[#1f1f1f] w-full lg:h-[170vh] md:h-[150vh] sm:h-[125vh] h-[120vh] clip-path-custom" data-aos="fade-down">
        <div className="relative w-full overflow-hidden h-full">
          <div className="relative h-full">
            {/* Slide 1 */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 0 ? "opacity-100" : "opacity-0"} ${isFading ? "opacity-0" : ""}`}>
              <div className="bg-[#1F1F1F] h-full flex flex-col items-center sm:pt-[10%] pt-[25%]">
                <div className="w-full px-[5%] md:px-[10%] lg:px-[15%]">
                  <Image src={old} alt="Image 1" className="w-full h-auto object-cover" />
                </div>
                <div className="text-center p-4 text-white overflow-visible  lg:max-w-[78%] md:max-w-[78%] sm:max-w-[78%] max-w-[90%]">
                  <h2 className="font-bold text-[1.5rem]">RESIDENTIAL CARE</h2>
                  <p className="text-[#808080] mt-2 lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.705rem] text-[0.725rem]">
                  At TCM Care, our philosophy adopts the person-centred approach, so when delivering day-to-day care practice, the identity of an individual is at the centre of what we do. As a result of fostering a model of care that looks at the ‘whole person’ – and not a person’s ability or medical capacity; TCM Care continues to uphold a commitment to offering peace of mind to both an individual and their family alike. Each TCM Care Home provides a place where individuals can flourish within a supportive and enabling environment: one that offers friendship,  and the opportunity to maintain links with the wider community. Furthermore, each member of staff at TCM Care is committed to delivering a service that knows more than just an individual’s name and face. With the support of a bespoke initial assessment, use of Person Centred Software (Mobile Care Monitoring) – an intelligent mobile solution for care planning, reporting and care interactions – and ongoing reviews and evaluations regarding a person’s priorities and preferences, staff can continue to deliver the highest quality of care in line with the company’s see more..
                 </p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 1 ? "opacity-100" : "opacity-0"} ${isFading ? "opacity-0" : ""}`}>
              <div className="bg-[#1F1F1F] h-full flex flex-col items-center sm:pt-[10%] pt-[25%]">
                <div className="w-full px-[5%] md:px-[10%] lg:px-[15%]">
                  <Image src={care} alt="Image 2" className="w-full h-auto object-cover" />
                </div>
                <div className="text-center p-4 text-white overflow-visible  lg:max-w-[40%] md:max-w-[60%] sm:max-w-[60%] max-w-[90%]">
                  <h2 className="font-bold text-[1.5rem]">DOMICILIARY CARE</h2>
                  <p className="text-[#808080] mt-2  lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.875rem] text-[0.890rem]">
                                    We have a huge number of staff in our database covering a variety of specialities including the following: Healthcare Care Assistant Support Workers Senior Supports Home Care Managers Senior Carers Clinical HCAs Carer Supports Nurses
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 2 ? "opacity-100" : "opacity-0"} ${isFading ? "opacity-0" : ""}`}>
              <div className="bg-[#1F1F1F] h-full flex flex-col items-center sm:pt-[10%] pt-[25%]">
                <div className="w-full px-[5%] md:px-[10%] lg:px-[15%]">
                  <Image src={nursing} alt="Image 3" className="w-full h-auto object-cover" />
                </div>
                <div className="text-center p-4 text-white overflow-visible  lg:max-w-[40%] md:max-w-[60%] sm:max-w-[60%] max-w-[90%]">
                  <h2 className="font-bold text-[1.5rem]">TCM Recruitment</h2>
                  <p className="text-[#808080] mt-2 text-[0.975rem]">
                  We have a huge number of staff in our database covering a variety of specialities including the following • Specialist Care • Mental Health • Physical Disability • Palliative Care • Elderly Care • Learning Disability
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 3 ? "opacity-100" : "opacity-0"} ${isFading ? "opacity-0" : ""}`}>
              <div className="bg-[#1F1F1F] h-full flex flex-col items-center sm:pt-[10%] pt-[25%]">
                <div className="w-full px-[5%] md:px-[10%] lg:px-[15%]">
                  <Image src={hospitality} alt="Image 4" className="w-full h-auto object-cover" />
                </div>
                <div className="text-center p-4 text-white overflow-visible  lg:max-w-[60%] md:max-w-[60%] sm:max-w-[60%] max-w-[90%]">
                  <h2 className="font-bold text-[1.5rem]">Hospitality</h2>
                  <p className="text-[#808080] mt-2 lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.805rem] text-[0.790rem]">
                  The hospitality industry is intensely competitive, with new challenges arising every day. Sometimes it feels as if nothing is certain. But one thing you can be certain about is this: with Tendercare Management Ltd on your side, you’ll recruit the high-quality candidates who can help take your business from success to success. We already have an extensive database of experienced and talented hospitality professionals and we recruit new people daily to ensure we’re always able to fully support our clients with their requirements, whether you’re looking for one-day cover, a 12-month placement, or want to make the role more permanent. Our hospitality clients include hotels, catering companies. We have a great reputation for service and quality and a consistently high client retention rate.

</p>
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === 4 ? "opacity-100" : "opacity-0"} ${isFading ? "opacity-0" : ""}`}>
              <div className="bg-[#1F1F1F] h-full flex flex-col items-center sm:pt-[10%] pt-[25%]">
                <div className="w-full px-[5%] md:px-[10%] lg:px-[15%]">
                  <Image src={cleaning} alt="Image 5" className="w-full h-auto object-cover" />
                </div>
                <div className="text-center p-4 text-white overflow-visible lg:max-w-[60%] md:max-w-[60%] sm:max-w-[60%] max-w-[90%] ">
                  {newHeading ? (
                    <>
                      <p className="text-[1.56rem] font-bold">Cleaning</p>
                      <p className="font-bold border-b-[1px] mt-10 border-white">Office Cleaning</p>
                      <p className="text-[#808080] mt-4  lg:text-[0.875rem] md:text-[0.885rem] sm:text-[0.805rem] text-[0.790rem]">
                      Office Cleaning and Commercial premises cleaning is one of our specialities. With more than 5 years of experience, TCM is well equipped to deliver superior office cleaning London to any office size. Dedicated cleaning solutions specifically designed to your business specific needs.                      </p>
                      <p className="mt-10 font-bold border-b-[1px] border-white">Event Cleaning</p>
                      <p className="text-[#808080] mt-4  lg:text-[0.875rem] md:text-[0.885rem] sm:text-[0.805rem] text-[0.790rem]">
                      From large corporate events, brand events, weddings and birthday parties, TCM can take the cleaning hassle away. We can provide Pre-Event Cleaning and help with the setup of the venue, during event service to keep the venue in good shape, and Post Event Cleaning service to leave the venue in pristine condition. With years of experience in this field, with Miss Maid you will be in good hands for any occasion                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="font-bold text-[1.5rem]">Cleaning</h2>
                      <p className="text-[#808080] mt-2 text-[0.875rem]">
                        This is the description for Image 5.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Circle navigation */}
            <div className="absolute top-[93%]  left-1/2 transform -translate-x-1/2 flex space-x-3">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-400" : "bg-black"}`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #imgo {
          clip-path: polygon(0 6%, 100% 0, 100% 94%, 0 100%);
        }
        @media (max-width: 375px) {
          .text-20px {
            font-size: 1rem;
          }
          .text-xl {
            font-size: 1.25rem;
          }
          .p-4 {
            padding: 1rem;
          }
          p {
            line-height: 1.4;
            overflow-wrap: break-word;
          }
        }
      `}</style>
    </section>
  );
}
