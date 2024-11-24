import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { BiDownload } from "react-icons/bi";

interface allData {

  id: number,
  image: string,
  name: string,
  place: string,
  rating: number,
  review: number,
  minPrice: number,
  maxPrice: number,
  exam: number,
}

const List = ({ id, image, name, place, rating, review, minPrice, maxPrice, exam }: allData) => {


  return (
    <div className='w-full h-auto'>
      <div className='  p-3 rounded-2xl border border-[#424242] flex flex-wrap md:items-center md:justify-between'>

        {/* college name  */}
        <div className=' flex items-center gap-3  w-full md:w-4/12  '>
          <div className=' rounded-full border overflow-hidden'>
            <Image src={image} alt='logo' className=' rounded-full size-20 scale-150' />
          </div>
          <div className=' font-Roboto w-7/12'>
            <h3 className='  text-[1.3rem]'>{name}</h3>
            <p className='text-[#424242] text-[0.8rem]'>{place}</p>
          </div>
        </div>


        {/* section section  */}
        <div className=' flex flex-col justify-between gap-3  w-full md:w-5/12  my-6'>

          <div className=' flex flex-wrap  items-center gap-6 lg:gap-0  '>

            <div className=' flex gap-2'>
              <span className=' mt-1'>
                <FaStar className=' text-[#FFB411]' />
              </span>
              <div className=' flex flex-col '>
                <p>
                  <span >
                    {rating}
                  </span>
                  <span className=' text-[#3D72F9]'>
                    ({review})
                  </span>
                </p>
                <span className=' text-[#424242]  text-[0.8rem]'>Rating</span>
              </div>
            </div>

            <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

            <div className=' flex gap-2'>
              <span className=' mt-1'>
                <HiOutlineCurrencyRupee />
              </span>
              <div className=' flex flex-col '>
                <p>
                  <span>
                    {minPrice}lakh - {maxPrice}lakh
                  </span>
                </p>
                <span className=' text-[#424242]  text-[0.8rem]'>Fees</span>
              </div>
            </div>

            <hr className=' bg-[#424242] w-[3rem] rotate-90 hidden lg:block' />

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
                    ...+{exam}
                  </span>
                </p>
                <span className=' text-[#424242]  text-[0.8rem]'>Exams</span>
              </div>
            </div>

          </div>

          <div className=' flex gap-2'>
            <button className=' text-[#424242] border-[#424242] rounded-full border-2 px-4 text-[0.9rem] '>Private</button>
            <button className=' text-[#424242] border-[#424242]  rounded-full border-2 px-4 '>NIRF #29</button>
          </div>
        </div>


        {/* third section  */}

        <div className=' flex md:flex-col flex-row   md:w-[7rem] w-full   gap-3'>
          <button className=' bg-[#F9C63D] text-white  text-[0.8rem] rounded-full font-bold w-full py-2'>Details</button>

          <button className=' text-[#424242] border-[#424242] rounded-full border-2 font-bold text-[0.8rem] w-full py-2 flex items-center justify-center gap-1 text-center  '>
            <span>
              <BiDownload className=' text-[1rem] font-bold' />
            </span>
            Brochure
          </button>
        </div>

      </div>
    </div>
  )
}

export default List
