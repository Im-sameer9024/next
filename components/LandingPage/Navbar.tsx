"use client"

import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// import { assets } from '../../public/assets/assets.js'
// import Image from 'next/image.js'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const [bgColor, setBgColor] = useState<string>("bg-transparent")
  const [visible, setVisible] = useState(false)


  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("bg-white shadow-md")
      } else {
        setBgColor("bg-transparent")
      }
    }
    console.log(bgColor)

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [bgColor]);

  return (
    <div className={`w-[100vw] fixed z-10 top-0 ${bgColor} `}>
      <div className=' w-11/12 flex justify-between mx-auto  py-4'>

        {/*------------ Logo ---------- */}
        <div>
          <Image src={assets.logo} alt="logo" className=' w-24 md:w-40 ' />
        </div>

        {/*------- options ------ */}
        <ul className=' md:flex font-Roboto space-x-6 hidden'>
          <li>Option1</li>
          <li>Option2</li>
          <li>Option3</li>
          <li>Option4</li>
        </ul>

        {/*-------- User icon ---------- */}
        <div className=' md:flex gap-4 items-center hidden'>
          <button className=' border-[#F9C63D] border-2 px-4 py-2 rounded-full text-[#F9C63D]'>Internship</button>
          <div className=' size-8 bg-slate-500 rounded-full'></div>
        </div>

        {/* Mobile view of Navbar  */}

        <div className=' md:hidden'>

          {/*--------- burger icon-------  */}
          <span onClick={() => setVisible(true)} className=' text-[1.5rem] text-[#F9C63D] md:hidden'>
            <RxHamburgerMenu />
          </span>

          {/* side section of navbar  */}
          <div className={`bg-slate-200 z-40 ${visible ? "w-[80%] h-screen" : "w-0 overflow-hidden"}  absolute right-0 top-0 overflow-hidden overscroll-y-none md:hidden transition-all duration-700 ease-in-out`}>

            <div className='pl-4 py-4'>
              <button onClick={() => setVisible(false)}>
                <RxCross2 className=' text-[1.4rem]' />
              </button>
            </div>

            <div className=' flex items-center justify-center gap-6'>

              <div className='size-20 rounded-full bg-red-300'></div>
              <p className=' flex flex-col '>
                <span className=' font-bold text-[1.3rem]'> Alan Walker</span>
                <span> connect1123@gmail.com</span>
              </p>

            </div>

            {/* links  */}
            <div className=' mt-[3rem] font-Roboto'>
              <ul className=' flex flex-col'>
                <hr className=' border border-gray-400' />
                {
                  ["HOME", 'ABOUT', 'CONTACT', 'SERVICES'].map((item, index) => {
                    return (
                      <>
                        <Link href="#" key={index} className=' pl-4 text-[1.2rem] hover:bg-black hover:text-white hover:font-bold py-2'>{item}</Link>
                        <hr className=' border border-gray-400' />
                      </>
                    )
                  })
                }
              </ul>



            </div>

            <div className=' flex mt-[14rem] '>
              <button className='mx-auto bg-gray-100 border border-black px-10 rounded-full py-2 hover:bg-black hover:text-white hover:text-bold'>Log Out</button>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar
