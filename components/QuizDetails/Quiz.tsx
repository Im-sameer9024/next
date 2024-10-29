import React from 'react'
import { MdOutlineLocalPolice } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import Image from 'next/image';
import { assets } from '@/public/assets/assets';
import { MdShoppingBag } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineCardMembership } from "react-icons/md"


const Quiz = () => {
  return (
    <div className=' w-[100vw] h-[100vh]'>

      <div className='w-11/12 mx-auto bg-[#dc9bb4] rounded-xl px-2 md:px-6  flex justify-between '>

        {/* left section  */}
        <div className=' w-full md:w-6/12 flex flex-col gap-2'>
          <h2 className=' font-Montserrat text-[1.4rem] md:text-[3rem] font-bold text-white '>Welcome to the Live Poll</h2>
          <p className=' text-[1.2rem] text-white'>Test your knowledge in Data Science with our live quiz! Participate now and challenge yourself with real-time questions. Stay sharp, compete with others, and see how you rank. Ready to begin?"</p>
          <div className=' flex md:justify-evenly justify-between  text-[#820226] py-4'>
            <div className=' flex flex-col items-center'>
              <span>Earn Badges</span>
              <span>
                <MdOutlineLocalPolice className=' size-16 md:size-28' />
              </span>
            </div>
            <div className=' flex flex-col items-center'>
              <span>Get Internships</span>
              <span>
                <MdShoppingBag className=' size-16 md:size-24' />
              </span>

            </div>
            <div className=' flex flex-col items-center'>
              <span>Redeem Prizes</span>
              <span>
                <FiGift className=' size-16 md:size-24' />
              </span>

            </div>
          </div>

          <div className=' bg-[#8367FF] w-full h-auto p-6 text-[#F4EAE1] font-Roboto space-y-4 rounded-2xl md:outline-[25px] md:outline-white outline-none md:outline  items-center text-[0.8rem] md:text-[1.4rem]'>

            <div className=' flex justify-evenly'>
              <p className=' flex items-center gap-3'>
                <LuAlarmClock />
                <span>10 Minutes</span>
              </p>
              <p className=' flex items-center gap-3'>
                <MdOutlineElectricBolt />
                <span>10.6 k Impressions</span>
              </p>
            </div>
            <div className=' flex justify-evenly'>
              <p className=' flex items-center gap-3'>
                <IoNewspaperOutline />
                <span>10 Questions</span>
              </p>
              <p className=' flex items-center gap-3'>
                <MdOutlineCardMembership />
                <span>49 Live Participants</span>
              </p>
            </div>
          </div>

        </div>


        {/* right section  */}
        <div className='w-5/12 hidden md:block'>
          <Image src={assets.students} className='' alt='image' />
        </div>

      </div>

      {/* Text section  */}
      <div className=' w-11/12 mx-auto flex md:justify-between mt-3 font-Roboto md:flex-row flex-col-reverse gap-4 md:gap-0'>



        <div className=' w-full md:w-9/12 space-y-4' >
          <div className='space-x-6'>
            <button className=' border border-black px-4 py-2 rounded-full'>Data Science</button>
            <button className=' border border-black px-4 py-2 rounded-full'>Machine Learning</button>
          </div>
          <div>
            <p>Our commitments focus on three key pillars - the planet, the people, and our products – with multiple initiatives and day-to-day actions to achieve our  goals. We are committed to doing everything in our power to be  exemplary. Very early on, L’Oréal became aware of the urgent need to  address the challenges arising from the global environmental crisis.</p>
            <p>Our commitments focus on three key pillars - the planet, the people, and our products – with multiple initiatives and day-to-day actions to achieve our  goals. We are committed to doing everything in our power to be  exemplary. </p>

          </div>
        </div>

        <div>
          <button className=' px-[4rem] w-full text-white py-2 rounded-full bg-[#F9C63D]'>Enter the Poll</button>
          <p className=' text-center'>Name of College</p>
        </div>
      </div>

    </div>
  )
}

export default Quiz
