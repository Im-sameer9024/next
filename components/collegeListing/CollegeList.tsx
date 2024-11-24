import React from 'react'
import College from './College'
import { assets } from '@/public/assets/assets'

const CollegeList = () => {

  const data = [
    { id: 1, image: assets.college, name: "Thapar University and SRM University", place: 'Patiala, Punjab', rating: 4.1, review: 234, minPrice: 3.5, maxPrice: 5, exam: 4 },

    { id: 2, image: assets.college, name: "Thapar University", place: 'Chennai, Tamil Nadu', rating: 3.5, review: 434, minPrice: 3.5, maxPrice: 5, exam: 4 },

    { id: 3, image: assets.college, name: "Thapar University", place: 'Patiala, Punjab', rating: 4.1, review: 234, minPrice: 3.5, maxPrice: 5, exam: 4 },

    { id: 4, image: assets.college, name: "P.G University", place: 'Patiala, Punjab', rating: 4.1, review: 234, minPrice: 3.5, maxPrice: 5, exam: 4 }
  ]

  return (
    <div className=' w-[100vw] h-auto'>
      <div className='w-11/12 mx-auto flex flex-col items-center gap-8'>

        <h2 className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#F9C63D] to-[#F9853D] md:text-[4rem] text-[1.5rem] font-extrabold leading-tight text-center'>FIND THE RIGHT INTERNSHIP FOR YOU</h2>
        <p className=' font-Roboto text-[1.4rem] text-center '>Find internships with stipends upto ₹XYZ and take your career to the next level</p>

        <div className=' w-full md:w-7/12 flex justify-center relative mt-6'>
          <input type="text" className=' border-[#F9C63D] border-2  rounded-l-full shadow-2xl shadow-black  border-r-0 py-2 w-[80%] pl-4 outline-none' placeholder='Enter internship title, company or keyword' />
          <button className=' border-[#F9C63D] border-2 bg-[#F9C63D] text-white px-8 shadow-2xl shadow-black absolute right-4 md:right-8 py-2 rounded-full'>Search</button>
        </div>


      </div>

      {/* courses section  */}
      <div className=' w-11/12 mx-auto mt-[5rem] '>
        <College data={data} />
      </div>

    </div>
  )
}

export default CollegeList
