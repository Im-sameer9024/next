"use client"

import { assets } from '@/public/assets/assets'
import assert from 'assert'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillBook } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import { PiGraduationCapLight } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { BiDownload } from 'react-icons/bi'
import { HiOutlineCurrencyRupee } from 'react-icons/hi2'
import { CiWallet } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import FaqList from '../Faqs/FaqList'
import FaqList1 from '../Faq1/FaqList1'


const CollegeDetils = () => {

  const [show, setShow] = useState<boolean>(false)



  return (
    <div className='w-[100vw]'>

      {/* college image  */}
      <div className=' w-11/12 mx-auto'>
        <div className=' w-full relative'>
          <Image src={assets.clg} alt='logo' className='h-[20rem] w-full object-cover  rounded-2xl' />

          {/* logo  */}
          <div className=' absolute -bottom-5 left-4'>
            <Image src={assets.srm} alt='logo' className='size-24' />
          </div>
        </div>

        {/* details section  */}
        <div className=' mt-8 font-Roboto  '>
          {/* section -1  */}
          <div className=' font-Roboto'>
            <p className=' text-[2em]   font-bold'>SRM Institute of Science and Technology: Courses, Fees, Admission 2024, Placements</p>

            <div className=' flex flex-col md:flex-row md:justify-between mt-4'>
              <div className=' flex flex-wrap gap-4 md:flex-row items-center'>

                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <FaStar className=' text-[#FFB411]' />
                  </span>
                  <div className=' flex flex-col  '>
                    <p>
                      <span >
                        4.1
                      </span>
                      <span className=' text-[#3D72F9]'>
                        (234)
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Rating</span>
                  </div>
                </div>

                <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <PiGraduationCapLight />
                  </span>
                  <div className=' flex flex-col '>
                    <p>
                      <span>
                        1985
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Established</span>
                  </div>
                </div>

                <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <AiFillBook />
                  </span>
                  <div className=' flex flex-col '>
                    <p>
                      <span className=' hidden md:block'>
                        Chennai, Tamil Nadu
                      </span>
                      <span className='md:hidden block'>
                        Chennai..
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Location</span>
                  </div>
                </div>

                <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <FaEarthAmericas />
                  </span>
                  <div className=' flex flex-col '>
                    <p>
                      <span>
                        smalfksi.in
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Website</span>
                  </div>
                </div>

              </div>
              <div className=' flex justify-center '>
                <button className='bg-[#F9C63D] text-white rounded-full font-bold text-[0.8rem] w-[80%] py-2 px-[4rem]  flex items-center justify-center gap-1 text-center  '>
                  <span>
                    <BiDownload className=' text-[1rem] font-bold' />
                  </span>
                  Brochure
                </button>
              </div>

            </div>
          </div>

          {/* section-2  */}
          <div className=' w-full flex md:flex-row flex-col justify-between mt-4  font-Roboto items-center'>
            {/* left side  */}
            <div className='md:w-6/12 w-full'>
              <div>
                <button className=' text-[#424242] border-[#424242] rounded-full py-1 border-2 px-4 text-[0.9rem] '>
                  Private University
                </button>
                {/* <button  className=' text-[#424242] border-[#424242] rounded-full border-2 px-4 text-[0.9rem] '>
                  A++ NAAC accredited
                </button>
                <button  className=' text-[#424242] border-[#424242] rounded-full border-2 px-4 text-[0.9rem] '>
                  NIRF 23
                </button> */}
              </div>
              <div className=' mt-4'>
                <p>Established in the year 1985, SRM Institute of  Science and Technology or SRM IST (formerly known as SRM University  Chennai) is a top-ranked university that is part of the SRM Group of  Institutions and is located in Kattankulathur, Chennai. Internationally, the university is ranked 1001-1200 by the QS World University Rankings 2025 under the 'World University' category. Further, SRM University Chennai Rankings include 4th rank by Outlook 2023 under the Engineering category, 4th rank by Times 2023 for BBA, and 11th rank by NIRF 2024 under the Architecture category. The college has been accredited by IET Engineering (The Institution of Engineering and Technology), the Engineering  Accreditation Commission of ABET, the Computing Accreditation Commission of ABET, NBA, and the NAAC with an A++ Grade. SRM Chennai is approved by the UGC and AICTE.</p>
              </div>
            </div>

            {/* right side  */}
            <div className='md:w-5/12 w-full' >
              <div>
                <Image src={assets.cam} alt='image' className=' rounded-2xl h-[70%]' />
              </div>
              <div className=' flex justify-between items-center mt-1'>
                <span className=' font-bold text-[1.4rem]'>Check out the campus</span>
                <span className=' text-[#F9C63D]'>See all Photos</span>

              </div>

            </div>
          </div>

        </div>

        {/* courses and fees  */}
        <div className=' w-full mt-4 font-Roboto'>
          <div>
            <h3 className=' font-bold text-[1.4rem]'>Courses and Fees</h3>
          </div>
          <div className=' grid md:grid-cols-2 grid-cols-1 gap-8 mt-6'>
            {/* card-1  */}
            <div className=' rounded-2xl border p-6'>

              <div className=' flex justify-between'>
                <div>
                  <h3 className="font-bold text-[1.3rem]" >B.E / B.Tech</h3>
                  <p className=' text-[#424242]'>56 Courses</p>
                </div>
                <div className=' hidden md:block'>
                  <button className='bg-[#F9C63D] text-white rounded-full font-bold text-[0.8rem] w-full py-2 px-[4rem]  flex items-center justify-center gap-1 text-center'>
                    <span>
                      <BiDownload className=' text-[1rem] font-bold' />
                    </span>
                    Brochure
                  </button>
                </div>

              </div>

              <div className=' flex items-center lg:justify-around flex-wrap justify-between '>
                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <AiFillBook />
                  </span>
                  <div className=' flex flex-col  '>
                    <p>
                      <span>
                        JEE
                      </span>
                      <span className=' text-[#3D72F9]'>
                        ...+5
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Exams</span>
                  </div>
                </div>

                <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

                <div className=' flex gap-2 '>
                  <span className=' mt-1'>
                    <HiOutlineCurrencyRupee />
                  </span>
                  <div className=' flex flex-col '>
                    <p>
                      <span>
                        4.5 lakh - 5.4 lakh
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Fees</span>
                  </div>
                </div>

                <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <CiWallet />
                  </span>
                  <div className=' flex flex-col '>
                    <p>
                      <span>
                        ₹4.5 - 5.4 LPA
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Medium salary</span>
                  </div>
                </div>
              </div>

              <div className=' mt-2 md:hidden'>
                <button className='bg-[#F9C63D] text-white rounded-full font-bold text-[0.8rem] w-[80%] py-2 px-[4rem]  flex items-center justify-center gap-1 text-center mx-auto '>
                  <span>
                    <BiDownload className=' text-[1rem] font-bold' />
                  </span>
                  Brochure
                </button>
              </div>


            </div>

            {/* card-2  */}
            <div className=' rounded-2xl border p-6'>

              <div className=' flex justify-between'>
                <div>
                  <h3 className="font-bold text-[1.3rem]" >B.E / B.Tech</h3>
                  <p className=' text-[#424242]'>56 Courses</p>
                </div>
                <div className=' hidden md:block'>
                  <button className='bg-[#F9C63D] text-white rounded-full font-bold text-[0.8rem] w-full py-2 px-[4rem]  flex items-center justify-center gap-1 text-center'>
                    <span>
                      <BiDownload className=' text-[1rem] font-bold' />
                    </span>
                    Brochure
                  </button>
                </div>

              </div>

              <div className=' flex items-center lg:justify-around flex-wrap justify-between '>
                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <AiFillBook />
                  </span>
                  <div className=' flex flex-col  '>
                    <p>
                      <span>
                        JEE
                      </span>
                      <span className=' text-[#3D72F9]'>
                        ...+5
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Exams</span>
                  </div>
                </div>

                <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

                <div className=' flex gap-2 '>
                  <span className=' mt-1'>
                    <HiOutlineCurrencyRupee />
                  </span>
                  <div className=' flex flex-col '>
                    <p>
                      <span>
                        4.5 lakh - 5.4 lakh
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Fees</span>
                  </div>
                </div>

                <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

                <div className=' flex gap-2'>
                  <span className=' mt-1'>
                    <CiWallet />
                  </span>
                  <div className=' flex flex-col '>
                    <p>
                      <span>
                        ₹4.5 - 5.4 LPA
                      </span>
                    </p>
                    <span className=' text-[#424242]  text-[0.8rem]'>Medium salary</span>
                  </div>
                </div>
              </div>

              <div className=' mt-2 md:hidden'>
                <button className='bg-[#F9C63D] text-white rounded-full font-bold text-[0.8rem] w-[80%] py-2 px-[4rem]  flex items-center justify-center gap-1 text-center mx-auto '>
                  <span>
                    <BiDownload className=' text-[1rem] font-bold' />
                  </span>
                  Brochure
                </button>
              </div>


            </div>
          </div>

          <div className=' mt-6 flex justify-center items-center'>
            <button className=' text-[#424242] border-[#424242] rounded-full border-2 px-8 py-1 text-[1rem]'>View all Courses</button>
          </div>
        </div>

        {/* Frequently asked questions  */}
        <div className=' w-full mt-4 font-Roboto'>
          <div>
            <h3 className=' font-bold text-[1.4rem]'>Courses and Fees</h3>
          </div>

          <div>
            {/* <FaqList /> */}
            <FaqList1 />
          </div>


        </div>

      </div>

    </div>
  )
}

export default CollegeDetils
