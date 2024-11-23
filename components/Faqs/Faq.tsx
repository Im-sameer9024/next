import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface dataProps {
  id: number,
  que: string,
  ans: string,
}

const Faq = ({ id, que, ans }: dataProps) => {

  const [show, setShow] = useState<boolean>(false)

  return (
    <div>
      <p onClick={() => setShow(!show)} className=' flex justify-between py-2'>
        <span>{que}</span>
        <span className=' bg-[#F9C63D33] rounded-full flex justify-center items-center p-1'>
          <IoIosArrowDown className=' text-[#F9C63D]' />
        </span>
      </p>
      <p className={` ${show ? "h-[150px]" : "h-0 overflow-hidden"} transition-all duration-700  `}>
        {ans}
      </p>
      <hr className=' mt-2' />
    </div>
  )
}

export default Faq
