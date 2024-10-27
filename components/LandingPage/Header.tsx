import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { FaHeadSideVirus } from "react-icons/fa";


const Header = () => {
  return (
    <div className=' w-full h-auto mt-[6rem]'>
      <div className=' w-11/12 mx-auto  '>

        {/*---------- text----------  */}
        <div className=' flex w-full font-Roboto mt-14'>
          <div>
            <Image src={assets.emp} alt='logo' />
          </div>
          <div>
            <Image src={assets.your} alt='logo' />
          </div>
        </div>

        {/* Mind Text and Iamge  */}
        <div className=' mt-10 relative'>
          <div>
            <Image src={assets.mind} alt='mind' className=' hidden md:block' />
            <Image src={assets.smallMind} alt='smallMind' className=' md:hidden mx-auto' />
            <Image src={assets.mind2} alt='mind' className=' md:absolute md:-top-10 md:left-[48%] md:-translate-x-1/2 w-[550px] md:w-[400px] lg:w-[550px]' />
          </div>

          <div className=' mt-[5rem] flex flex-col items-center w-full md:w-8/12 mx-auto gap-6 '>
            <button className='md:z-10 bg-white border border-[#F9C63D] px-24 rounded-full py-2'>Get Me in</button>
            <p className=' text-center font-thin font-Roboto'>Providing interactive quizzes, practice modules, and exclusive opportunities that challenge their minds, foster creativity, and unlock their potential to thrive in a fast-paced, ever-evolving world of innovation</p>
            <hr className=' border-2 border-black mx-auto w-[100px] md:hidden' />
          </div>
        </div>

        {/*---------- Services section --------- */}
        <div className=' flex flex-wrap justify-evenly gap-[3rem] my-[8rem] relative '>

          <hr className=' border w-[80%] absolute top-[50%] hidden md:block ' />
          <hr className=' border w-[30%] absolute hidden md:block  rotate-90 top-[50%]' />


          {/*--------------- section-1 -------------- */}
          <div className='md:w-5/12 w-full mx-auto text-center md:text-start'>
            <h2 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 md:text-[2rem] lg:text-[4rem] text-[1.5rem] font-extrabold leading-tight'>GET INDUSTRY READY</h2>
            <p className=' mt-3 md:mt-0 font-Roboto text-[#565656] font-light w-full md:w-9/12'>Our commitments focus on three key pillars - the planet, the people, and our products – with multiple initiatives and day-to-day actions to achieve our  goals. We are committed to doing everything in our power to be  exemplary. </p>
          </div>

          {/*-------------- section-2 ------------- */}
          <div className='md:w-5/12 w-full mx-auto text-center'>
            <h2 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#F9C63D] to-[#F9853D]  md:text-[2rem] lg:text-[4rem] text-[1.5rem] font-extrabold leading-tight'>EXCLUSIVE DEALS</h2>
            <p className=' mt-3 md:mt-0 font-Roboto text-[#565656] font-light w-full md:w-9/12'>Our commitments focus on three key pillars - the planet, the people, and our products – with multiple initiatives and day-to-day actions to achieve our  goals. We are committed to doing everything in our power to be  exemplary. </p>
          </div>



          {/*-------------- section-3 ------------- */}
          <div className='md:w-5/12 w-full mx-auto text-center md:text-start'>
            <h2 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#F9C63D] to-[#F9853D]  md:text-[2rem] lg:text-[4rem] text-[1.5rem] font-extrabold leading-tight' >GET INDUSTRY READY</h2>
            <p className=' mt-3 md:mt-0 font-Roboto text-[#565656] font-light w-full md:w-9/12'>Our commitments focus on three key pillars - the planet, the people, and our products – with multiple initiatives and day-to-day actions to achieve our  goals. We are committed to doing everything in our power to be  exemplary. </p>
          </div>

          {/*-------------- section-4 ------------- */}
          <div className='md:w-5/12 w-full mx-auto text-center'>
            <h2 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 md:text-[2rem] lg:text-[4rem] text-[1.5rem] font-extrabold leading-tight'>EXCLUSIVE DEALS</h2>
            <p className=' mt-3 md:mt-0 font-Roboto text-[#565656] font-light w-full md:w-9/12'>Our commitments focus on three key pillars - the planet, the people, and our products – with multiple initiatives and day-to-day actions to achieve our  goals. We are committed to doing everything in our power to be  exemplary. </p>
          </div>

        </div>


        {/* Achievements section  */}

        <div className=' my-[5rem]'>
          <h2 className=' font-Montserrat font-bold text-center text-[1.6rem] md:[2rem]'>OUR ACHIEVEMENTS</h2>

          <div className=' flex flex-col md:flex-row gap-4 md:justify-between my-[4rem] text-[#929292] w-10/12 mx-auto'>

            {/*---------- section-1 --------- */}
            <div className=' flex gap-6 '>
              <span>
                {/* <Image src={assets.campus} alt='Campus' /> */}
                <FaRegBuilding className=' text-[3.5rem]'/>
              </span>
              <p className=' flex flex-col text-[1.2rem] md:text-[1.4rem] leading-tight '>
                <span>2000+</span>
                <span>Campus Partners</span>
              </p>
            </div>

            <div className=' border md:block hidden'></div>

            {/*----------- section-2 -------- */}
            <div className=' flex gap-6 items-center'>
              <span>
                {/* <Image src={assets.school} alt='Campus' /> */}
                <IoSchoolOutline className=' text-[3.5rem]'/>
              </span>
              <p className=' flex flex-col text-[1.2rem] md:text-[1.4rem] leading-tight '>
                <span>8 Mn+</span>
                <span>Access to Youth</span>
              </p>
            </div>
            <div className=' border md:block hidden'></div>


            {/*--------------- section-3 --------- */}
            <div className=' flex gap-6 items-center md:gap-6'>
              <span>
                {/* <Image src={assets.minds} alt='Campus' /> */}
                <FaHeadSideVirus className=' text-[3.5rem]'/>
              </span>
              <p className=' flex flex-col text-[1.2rem] md:text-[1.4rem] leading-tight '>
                <span>1 Mn+</span>
                <span>Experiences Delivered</span>
              </p>
            </div>

          </div>
        </div>


        {/*---------- OUR COLLABORATORS section --------- */}
        <div className=' my-[5rem]'>
          <h2 className=' font-Montserrat font-bold text-center text-[1.6rem] md:text-[2rem]'>OUR COLLABORATORS</h2>
          <div className=' my-[4rem] text-[#929292] mx-auto w-full md:w-8/12 flex  flex-wrap gap-4 md:justify-between justify-center'>

            {/*---------- section-1 --------- */}
            <div className=' flex gap-4 items-center'>
              <Image src={assets.gillette} alt='Campus' className=' bg-red-400 w-[100px] ' />
            </div>


            {/*----------- section-2 -------- */}
            <div className=' flex gap-4 items-center'>
              <Image src={assets.orchid} alt='Campus' className=' size-20' />
            </div>


            {/*--------------- section-3 --------- */}
            <div className=' flex gap-4 items-center'>
              <Image src={assets.gold} alt='Campus' className=' size-20' />
            </div>

            {/*--------------- section-4 --------- */}
            <div className=' flex gap-4 items-center'>
              <Image src={assets.nature} alt='Campus' className=' size-20' />
            </div>

            {/*--------------- section-5 --------- */}
            <div className=' flex gap-4 items-center'>
              <Image src={assets.niit} alt='Campus' className=' size-20' />
            </div>

          </div>

        </div>


        {/*---------- Social section ----------- */}
        <div className=' flex flex-col md:flex-row md:justify-between md:items-center'>

          {/*------------ Left section --------- */}

          <div className=' md:w-6/12 w-full flex flex-col gap-6 mx-auto md:mx-0  text-center'>
            <h3 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 md:text-[4rem] text-[1.5rem] font-extrabold leading-tight'>APPLY FOR THE BEST INTERNSHIPS</h3>
            <p className=' font-Roboto'>Explore internships with stipends and PPOs to fast-track your career with hands-on experience and industry connections...</p>
            <button className=' bg-[#F9C63D] px-4 py-3 rounded-full text-white font-bold mx-auto'>Browse Opportunities</button>

          </div>

          {/*----------- Right section --------------- */}
          <div className=' md:w-4/12 w-full mt-6 md:mt-0'>
            <Image src={assets.social} alt='social' className='' />
          </div>

        </div>

        {/* Stay in the Loop  */}
        <div className=' my-[5rem] flex flex-col items-center gap-4'>
          <h3 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#F9C63D] to-[#F9853D] md:text-[4rem] text-[1.5rem] font-extrabold leading-tight'>STAY IN THE LOOP</h3>
          <p className=' font-Roboto w-full md:w-7/12 text-center'>Sign up to receive early updates on the latest internships, quizzes, and opportunities tailored to your interests. Be the first to explore and take advantage of what’s most relevant to you</p>

          <div className=' w-full md:w-6/12 flex justify-center relative'>
            <input type="text" className=' border-[#F9C63D] border-2  rounded-l-full shadow-2xl shadow-black  border-r-0 py-2 w-[80%]' />
            <button className=' border-[#F9C63D] border-2 bg-[#F9C63D] text-white px-8 shadow-2xl shadow-black absolute right-4 md:right-8 py-2 rounded-full'>Join Us</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Header
