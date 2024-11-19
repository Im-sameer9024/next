import React from 'react'
import AllCards from './AllCards';

interface cardDataProps {
  cardData: { id: number, companyName: string, color: string, title: string, logo: string, des: string, type: string, institutes: [] }[];
}

const Events = ({ cardData }: cardDataProps) => {


  return (
    <div className=' w-full flex mt-6 justify-between'>

      {/* filtered section  */}

      {/* Filters section */}
      <div className="hidden md:w-[22%] h-[150px] border border-[#868585] bg-[#F2F0EF] pt-4 pb-10 px-2 text-[#424242] rounded-xl lg:flex flex-col gap-4">
        {/* Type */}
        <div>
          <h3>Type</h3>
          <div className="flex flex-wrap gap-2">
            {["all", "onsite", "remote", "hybrid"].map((type) => (
              <button
                key={type}
                className={`border-2 rounded-full px-3 border-[#F89E21] text-[#F89E21]`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards section  */}

      <div className=' w-full md:w-[76%] md:mx-auto '>
        <AllCards cardData={cardData} />
      </div>

    </div>
  )
}

export default Events




 
