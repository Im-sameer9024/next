import React, { useState } from 'react'
import { IoMdStarOutline } from "react-icons/io";
import Image from 'next/image';
import { MdBookmarkBorder } from "react-icons/md";
import { Topic, Benefit } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { ScrollArea } from "../ui/scroll-area";


interface cardProps {
  id: number,
  time: string,
  title: string,
  des: string,
  logo: string,
  validity: string,
  price: string,
  place: string,
  color: string,
}

const Card = ({ id, time, title, des, logo, validity, price, place, color }: cardProps) => {


  const [isOpen, setIsOpen] = useState(false);

  // Format duration string
  const getDurationString = (months: number) => {
    return `${months} ${months === 1 ? "Month" : "Months"}`;
  };

  // Format stipend string
  const formatStipend = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };



  return (
    <>
      <div className=' w-[31%] p-3 border border-gray-400 rounded-xl font-Roboto'>

        {/* colorful section  */}
        <div className={`${color} px-2 py-4 rounded-xl flex flex-col gap-4`}>


          {/* section-1  */}
          <div className=' flex justify-between'>
            <div className=' bg-white rounded-full px-4 py-2'>
              {time}
            </div>

            <span className='flex justify-center items-center bg-white rounded-full p-2'>
              <MdBookmarkBorder className=' text-[1.6rem]' />
            </span>
          </div>

          {/* section-2  */}
          <div>
            <p className=' text-[#424242]'>{title}</p>

            <div className=' flex justify-between items-center'>
              <h3 className=' text-[1.5rem] font-[500]'>{des}</h3>
              <span className=' bg-white w-12 h-10 flex justify-center items-center rounded-full'>
                <Image src={logo} alt='logo' className=' rounded-full' />
              </span>
            </div>
          </div>

          {/* section-3  */}

          <div className=' text-[#424242] flex flex-wrap gap-2'>
            <button className=' border border-[#424242] rounded-full px-3 py-1'>Job Offer</button>
            <button className=' border border-[#424242] rounded-full px-3 py-1'>Flexible Hours</button>
            <span className=' bg-white rounded-full px-3 py-1'>{validity}</span>
          </div>
        </div>

        {/* Details section  */}
        <div className=' flex justify-between mt-4'>
          <div>
            <h3 className=' font-semibold text-[1.3rem]'>{price}/month</h3>
            <p>{place}</p>
          </div>
          <button className=' bg-[#F9C63D] rounded-full px-6 text-white'>
            Details
          </button>
        </div>


      </div>
      {/* Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={setIsOpen} >
            <DialogContent className="animate-fade-in-up">
              <DialogHeader>
                <div>
                  <Image src={assets.notion} alt="logo" className=" w-10 h-10" />
                  <p>Notion</p>
                </div>
                <div>
                  <span>
                    <MdBookmarkBorder />
                  </span>
                  <button className=" bg-[#F9C63D] px-8 py-2 rounded-full">Apply</button>
                  <span>
                    <IoCloseSharp />
                  </span>
                </div>
              </DialogHeader>
              <DialogDescription>
                {/* <div className="flex items-center gap-4">
                  <Image
                    src={internship.imgUrl}
                    alt={`${internship.companyName} logo`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <h4 className="font-semibold">{internship.companyName}</h4>
                </div> */}
                <ScrollArea>

                </ScrollArea>

                <div className="mt-4">
                  <p>
                    <span className="font-semibold">Duration:</span>{" "}
                    {getDurationString(internship.duration)}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {internship.location}
                  </p>
                  <p>
                    <span className="font-semibold">Eligibility:</span>{" "}
                    {internship.eligibility}
                  </p>
                  <p>
                    <span className="font-semibold">Stipend:</span>{" "}
                    {internship.stipend === 0
                      ? "Unpaid"
                      : formatStipend(internship.stipend) + "/month"}
                  </p>
                </div>
              </DialogDescription>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

export default Card
