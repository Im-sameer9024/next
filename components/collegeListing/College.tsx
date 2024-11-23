"use client"

import React, { useState } from 'react'
import Lists from './Lists';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface cardDataProp {
  data: {
    id: number,
    image: string,
    name: string,
    place: string,
    rating: number,
    review: number,
    minPrice: number,
    maxPrice: number,
    exam: number,
  }[]
}


const College = ({ data }: cardDataProp) => {

  type ratingType = "All" | "4+ start" | "3+ star" | "2+ start";
  type ownerType = "All" | "Public" | "Semi Government"
  const [selectedType, setSelectedType] = useState<ratingType>("All");
  const [selectedOwner, setSelectedOwner] = useState<ownerType>("All")



  return (
    <div className=' w-full'>

      <div>
        <p>125 results</p>
      </div>


      <div className="w-full flex mt-6 justify-between mx-auto">

        {/* Filters section */}
        <div className="hidden md:w-[22%] h-[550px] border border-[#868585] bg-[#F2F0EF] pt-4 pb-10 px-2 text-[#424242] rounded-xl md:flex flex-col gap-4">

          {/* Location */}
          <div>
            <h3>Location</h3>
            <Select >
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Popular Cities</SelectLabel>

                  <SelectItem value='hello'>
                    hello
                  </SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Fee Range */}
          {/* <div>
            <h3>Fee</h3>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="5000">₹5,000</SelectItem>
                    <SelectItem value="10000">₹10,000</SelectItem>
                    <SelectItem value="15000">₹15,000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="flex items-center">to</span>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Max" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="20000">₹20,000</SelectItem>
                    <SelectItem value="30000">₹30,000</SelectItem>
                    <SelectItem value="50000">₹50,000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div> */}

          {/* Type */}
          <div>
            <h3>Rating</h3>
            <div className="flex flex-wrap gap-2">
              {["All", "4+ star", "3+ star", "2+ star"].map((type) => (
                <button onClick={() => setSelectedType(type as ratingType)}
                  className={`border-2 rounded-full px-3 ${selectedType === type
                    ? "border-[#F89E21] text-[#F89E21]"
                    : "border-[#868585] text-[#868585]"
                    }`}

                  key={type}>
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* OwnerShip */}
          <div>
            <h3>OwnerShip</h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Public", "Semi Government"].map((type) => (
                <button onClick={() => setSelectedType(type as ratingType)}
                  className={`border-2 rounded-full px-3 ${selectedType === type
                    ? "border-[#F89E21] text-[#F89E21]"
                    : "border-[#868585] text-[#868585]"
                    }`}

                  key={type}>
                  {type}
                </button>
              ))}
            </div>
          </div>


      


          {/* Specialization */}
          <div>
            <h3>Specialization</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='hh'>
                    hh
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Exams Accepted */}
          <div>
            <h3>Exams Accepted</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select benefits" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='mello'>
                    mello
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cards section */}
        <div className=" w-full md:w-[76%] ">
          <Lists data={data} />
        </div>
      </div>

    </div>
  )
}

export default College
