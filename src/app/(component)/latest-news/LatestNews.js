import React from 'react'
import NewsCard from './newscard/NewsCard'
import SupportWork from '@/app/public/img/Support-Workers-2.jpg'
import NursingStaff2 from '@/app/public/img/Nursing Staff (1).jpg'
import CleaningStaff2 from '@/app/public/img/Cleaning-Staff.jpg'
import TCMHospitality from '@/app/public/img/TCM Hospitality image  (1).jpg'
import Link from 'next/link'

export default function LatestNews() {
  return (
    <>
      {/* Parent container for responsive grid layout */}
      <div id='news'  data-aos="fade-down">

        <p className='text-[40px] font-bold text-center my-[3%]'>Latest News</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 px-4 sm:px-6 md:px-10 lg:px-20'>
          <Link href="/CareStaff"> <NewsCard image={SupportWork} txt1='Domiciliary Care Staff' txt2='We have a huge number of staff in our database covering a...' /></Link>
          <Link href="/TCM"> <NewsCard image={NursingStaff2} txt1='TCM Recruitment' txt2='We have a huge number of staff in our database covering variety ...' /></Link>
          <Link href="/Cleaning"> <NewsCard image={CleaningStaff2} txt1='Cleaning' txt2='Office Cleaning and Commercial premises cleaning is one of our...' /></Link>
          <Link href="/Hospitality"> <NewsCard image={TCMHospitality} txt1='Hospitality' txt2='The hospitality industry is intensely competitive, with new...' /></Link>
        </div>
      </div>
    </>
  )
}
