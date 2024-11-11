/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Cards from './Cards'
import { MdOutlineArrowDropDown } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface cardDataProps {
  cardData: { id: number, time: string, title: string, des: string, logo: string, validity: string, price: string, place: string, color: string, status: string[], type: string[], location: string[], category: string[], skills: [] }[];
  dispatch: React.Dispatch<{ type: string, payload?: any }>;
}


const Courses = ({ cardData, dispatch }: cardDataProps) => {



  return (

    <div className=' w-full'>


      <div className=' flex justify-end'>
        <div className=' w-[76%] flex items-end justify-between'>
          <span className=' font-Roboto text-[1.2rem] font-semibold'>{cardData.length} Results</span>
          <div className=' rounded-full bg-black p-1 w-[13%] flex justify-between items-center'>
            <span className=' bg-white rounded-full w-10 h-10 flex flex-col justify-center items-center gap-1 '>

              <hr className=' border border-black w-5' />
              <hr className=' border border-black w-3' />
              <hr className=' border border-black w-1' />

            </span>
            <span className=' text-white'>
              Recent
            </span>
            <span className=' text-white pr-1 font-semibold font-Roboto'>
              <MdOutlineArrowDropDown />
            </span>

          </div>
        </div>
      </div>



      <div className=' w-full flex mt-6 justify-between'>

        {/* filtered section  */}

        <div className=' w-[22%] h-[550px] border border-[#868585] bg-[#F2F0EF] pt-4 pb-10 px-2 text-[#424242] rounded-xl flex flex-col gap-4'>

          {/* status  */}
          <div>
            <h3>Status</h3>
            <div className=' flex gap-2'>
              <button onClick={() => dispatch({ type: 'Status', payload: 'all' })} className={`border-2  rounded-full px-6 ${cardData[0].status.includes('all') ? "border-[#F89E21] text-[#F89E21]" : "border-[#868585] text-[#868585]"} `}>All</button>

              <button onClick={() => dispatch({ type: 'Status', payload: 'saved' })} className={`border-2  rounded-full px-6 ${cardData[0].status.includes('saved') ? "border-[#F89E21] text-[#F89E21]" : "border-[#868585] text-[#868585]"} `}>Saved</button>
            </div>
          </div>

          {/* Type  */}
          <div >
            <h3>Type</h3>
            <div className=' flex flex-wrap gap-2'>
              <button onClick={() => dispatch({ type: 'Type', payload: 'all' })} className={`border-2  rounded-full px-6 ${cardData[0].type.includes('all') ? "border-[#F89E21] text-[#F89E21]" : "border-[#868585] text-[#868585]"} `}>All</button>

              <button onClick={() => dispatch({ type: 'Type', payload: 'onsite' })} className={`border-2  rounded-full px-3 ${cardData[0].type.includes('onsite') ? "border-[#F89E21] text-[#F89E21]" : "border-[#868585] text-[#868585]"} `}>On-Site</button>

              <button onClick={() => dispatch({ type: 'Type', payload: 'remote' })} className={`border-2  rounded-full px-3 ${cardData[0].type.includes('remote') ? "border-[#F89E21] text-[#F89E21]" : "border-[#868585] text-[#868585]"} `}>Remote</button>

              <button onClick={() => dispatch({ type: 'Type', payload: 'hybrid' })} className={`border-2  rounded-full px-3 ${cardData[0].type.includes('hybrid') ? "border-[#F89E21] text-[#F89E21]" : "border-[#868585] text-[#868585]"} `}>Hybrid</button>
            </div>
          </div>

          {/* Location  */}
          <div>
            <h3>Location</h3>
            <div>

              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <select name="" id="" className=' h-1/4 overflow-y-scroll w-full rounded-full py-1 px-2 outline-none'>
                <option value="">Search</option>
                <option value="bangalore">Bangalore</option>
                <option value="delhi">Delhi</option>
                <option value="remote">remote</option>
                <option value="mumbai">Mumbai</option>
                <option value="remote">remote</option>
                <option value="remote">remote</option>
              </select>
            </div>
          </div>

          {/* Category  */}
          <div>
            <h3>Category</h3>
            <div>
              <select name="" id="" className=' w-full rounded-xl py-1 px-2 outline-none' >
                <option value="">Search</option>
                <option value="">Search</option>
                <option value="">Search</option>
                <option value="">Search</option>
              </select>
            </div>
          </div>

          {/* Stipend  */}

          <div>
            <h3>Stipend</h3>
            <div className=' flex  justify-between'>

              <div>
                <select name="" id="" className=' w-full rounded-xl py-1 px-2 outline-none' >
                  <option value="">Search</option>
                  <option value="">Search</option>
                  <option value="">Search</option>
                  <option value="">Search</option>
                </select>

              </div>
              <p>to</p>
              <div>
                <select name="" id="" className=' w-full rounded-xl py-1 px-2 outline-none' >
                  <option value="">Search</option>
                  <option value="">Search</option>
                  <option value="">Search</option>
                  <option value="">Search</option>
                </select>

              </div>
            </div>
          </div>

          {/* Skills  */}

          <div>
            <h3>Skills</h3>
            <div>
              <select name="" id="" className=' w-full rounded-xl py-1 px-2 outline-none' >
                <option value="">Search</option>
                <option value="">Search</option>
                <option value="">Search</option>
                <option value="">Search</option>
              </select>

            </div>
          </div>


        </div>

        {/* Cards section  */}

        <div className=' w-[76%]'>
          <Cards cardData={cardData} />
        </div>

      </div>
    </div>

  )
}

export default Courses
