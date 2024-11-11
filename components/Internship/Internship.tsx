/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useReducer } from 'react'
import { assets } from '@/public/assets/assets'
import Courses from './Courses'




const Internship = () => {

  const initialValue = {

    cardData: [
      { id: 1, time: '2 week ago', title: 'Notion', des: "Senior Product Designer", logo: assets.notion, validity: "3 Months", price: '15k', place: "Bangalore Urban", color: 'bg-[#FFE1CC]', status: ["all"], type: ['all'], location: [], category: [], skills: [] },

      { id: 2, time: '1 week ago', title: 'American Express', des: "Junior UI/UX Design Intern", logo: assets.american, validity: "3 Months", price: '25k', place: "Remote", color: 'bg-[#E3DBFA]', status: ["all"], type: ['all'], location: [], category: [], skills: [] },

      { id: 3, time: '2 week ago', title: 'Notion', des: "Senior Product Designer", logo: assets.dominos, validity: "3 Months", price: '45k', place: "Delhi", color: 'bg-[#ECEFF4]', status: ["all"], type: ['all'], location: [], category: [], skills: [] },

      { id: 4, time: '2 week ago', title: 'Notion', des: "Senior Product Designer", logo: assets.dominos, validity: "3 Months", price: '75k', place: "Mumbai", color: 'bg-[#D4F6ED]', status: ["all"], type: ['all'], location: [], category: [], skills: [] }
    ]

  }

  const reducer = (state, action: any) => {
    switch (action.type) {
      case 'Status':
        break;

      case 'Type':
        break;

      default:
        break;
    }

  }


  const [filterData, dispatch] = useReducer(reducer, initialValue)



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
      <div className=' w-11/12 mx-auto mt-[5rem]'>
        <Courses cardData={filterData.cardData} dispatch={dispatch} />
      </div>

    </div>
  )
}

export default Internship
