"use client"

import React, { useReducer } from 'react'
import Events from './Events'
import { assets } from '@/public/assets/assets'

const EventLanding = () => {

  const initialValue = {
    cardData: [
      { id: 1, companyName: 'Whisper', color: 'bg-[#FFE1CC]', title: 'Personal Branding & Hygiene Seminar', logo: assets.dominos, des: 'Boost your personal brand and elevate your confidence with expert tips on hygiene and self-care.', institutes: ['mello', 'sello'], type: 'In-Person' },
      { id: 2, companyName: 'Whisper', color: 'bg-[#E3DBFA]', title: 'Personal Branding & Hygiene Seminar', logo: assets.dominos, des: 'Boost your personal brand and elevate your confidence with expert tips on hygiene and self-care.', institutes: ['mello', 'sello'], type: 'Virtual' },
      { id: 3, companyName: 'Whisper', color: 'bg-[#E3DBFA]', title: 'Personal Branding & Hygiene Seminar', logo: assets.dominos, des: 'Boost your personal brand and elevate your confidence with expert tips on hygiene and self-care.', institutes: ['mello', 'sello'], type: 'In-Person' },
      { id: 4, companyName: 'Whisper', color: 'bg-[#E3DBFA]', title: 'Personal Branding & Hygiene Seminar', logo: assets.dominos, des: 'Boost your personal brand and elevate your confidence with expert tips on hygiene and self-care.', institutes: ['mello', 'sello'], type: 'In-Person' },
    ]

  }

  const reducer = () => { }

  const [Data, dispatch] = useReducer(reducer, initialValue)
  console.log(Data)

  return (
    <div className='w-full'>
      <div className='w-11/12 mx-auto flex flex-col items-center gap-8'>

        <h2 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#F9C63D] to-[#F9853D] md:text-[4rem] text-[1.5rem] font-extrabold leading-tight text-center'>JOIN THE ACTION AT YOUR CAMPUS</h2>
        <p className=' font-Roboto text-[1.4rem] text-center '>Select the event happening at your institute...</p>

        <div className=' w-full md:w-7/12 flex justify-center relative mt-6'>
          <input type="text" className=' border-[#F9C63D] border-2  rounded-l-full shadow-2xl shadow-black  border-r-0 py-2 w-[80%] pl-4 outline-none' placeholder='Enter the event title or keyword' />
          <button className=' border-[#F9C63D] border-2 bg-[#F9C63D] text-white px-8 shadow-2xl shadow-black absolute right-4 md:right-8 py-2 rounded-full'>Search</button>
        </div>


      </div>

      {/* All Events section  */}
      <div className=' w-11/12 mx-auto mt-[5rem]'>

        <Events cardData={Data.cardData} />
      </div>

    </div>
  )
}

export default EventLanding
