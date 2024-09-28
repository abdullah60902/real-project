"use client";
import React from 'react';
import meeting from '@/app/public/img/meeting.jpg';
import old from '@/app/public/img/old.jpg';
import care from '@/app/public/img/care.jpg';
import bell from '@/app/public/img/bell.jpg';
import Image from 'next/image';
import can from '@/app/public/img/can.jpg';
import Link from 'next/link';

export default function RsidentialCare() {
  return (
    <>
      <section>
        <div className='grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5' data-aos="fade-down">
          {[
            {
              title: <Link href="/Recuirtment">RECRUITMENT</Link>,
              imgSrc: meeting,
              description: "TCM Ltd works with a range of businesses in and around London and surrounding areas, from SMEs through to larger organisations. Our London recruitment agency sources business support staff for a range of industries and sectors.",
            },
            {
              title: <Link href="/CareStaff">DOMICILIARY CARE</Link>,
              imgSrc: care,
              description: "We have a huge number of staff in our database covering a variety of specialities including the following:",
              listItems: [
                "Healthcare Care Assistant",
                "Support Workers",
                "Senior Supports",
                "Home Care Managers",
                "Senior Carers",
                "Clinical HCAs",
                "Carer Supports",
                "Nurses",
              ],
              marginTop: 'mt-10',
            },
            {
              title: <Link href="/InsideCare">RESIDENTIAL CARE</Link>,
              imgSrc: old,
              description: "At TCM Care, our philosophy adopts the person-centred approach, so when delivering day-to-day care practice, the identity of an individual is at the centre of what we do.",
            },
            {
              title: <Link href="/Hospitality">HOSPITALITY</Link>,
              imgSrc: bell,
              description: "The hospitality industry is intensely competitive, with new challenges arising every day. But one thing you can be certain about is this: with Tendercare Management Ltd on your side, you’ll recruit the high-quality candidates who can help take your business from success to success.",
              marginTop: 'mt-10',
            },
            {
              title: <Link href="/Cleaning">CLEANING</Link>,
              imgSrc: can,
              description: "Office Cleaning and Commercial premises cleaning is one of our specialities. With more than 5 years of experience, TCM is well equipped to deliver superior office cleaning London to any office size. Dedicated cleaning solutions specifically designed to your business specific needs.",
            },
          ].map((item, index) => (
        <div
  key={index}
  className={`flex flex-col items-center p-5 border border-gray-300 rounded-lg hover:shadow-lg hover:border-[#889cba] transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 ${item.marginTop || ''}`} // Added transform, translate and scale on hover
>
  <p className='text-lg font-semibold tracking-wide border-b-2 border-b-[#889cba] mb-2'>{item.title}</p>
  <Image src={item.imgSrc} alt={item.title} className="w-[350px] h-[25vh] object-cover" />
  <p className='text-md text-[#7D7D7D] leading-7 text-left mt-2'>{item.description}</p>
  {item.listItems && (
    <ul className='list-disc text-[#7D7D7D] text-md pl-5 text-left w-full ml-0'>
      {item.listItems.map((listItem, i) => (
        <li key={i}>{listItem}</li>
      ))}
    </ul>
  )}
</div>

          ))}
        </div>
      </section>
    </>
  );
}
