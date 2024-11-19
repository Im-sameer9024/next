import Image from 'next/image'
import React from 'react'


interface cardProps {
  id: number, companyName: string, color: string, title: string, logo: string, des: string,type:string, institutes: []
}

const EventCard = ({  companyName, color, title, logo, des,type, institutes: [] }: cardProps) => {
  return (
    <>
      <div className=" w-full sm:w-[40%] md:w-[47%] lg:w-[45%] xl:w-[31%] p-2 border border-gray-400 rounded-xl font-Roboto">

        {/* colorful section  */}
        <div className={`${color} px-2 py-4 rounded-xl flex flex-col gap-4 font-Roboto`}>

          {/* section-1  */}
          <div className=' mt-6'>
            <h3 className=' text-[#424242] font-semibold text-[0.9rem]'>{companyName}</h3>
            <div className=' flex justify-between'>
              <h3 className=' text-[1.4rem] font-semibold tracking-wide'>{title}</h3>
              <Image src={logo} alt='logo'
                className="rounded-full object-cover size-[4rem]" />
            </div>

          </div>

          {/* section-2  */}
          <div>
            <p className=' text-[#393939] text-[0.9rem] pr-3'>{des}</p>
          </div>

          {/* section-3  */}
          <div>
            <span className=' bg-[#FFFFFF] px-4 py-2 rounded-full'>
              {type}
            </span>
          </div>

        </div>

        {/* button  */}
        <div className=' w-full flex items-center justify-center mt-3'>
          <button className=' bg-[#F9C63D] px-[3rem] py-3 text-white rounded-full'>
            Enter the Event
          </button>
        </div>


      </div>

    </>
  )
}

export default EventCard
