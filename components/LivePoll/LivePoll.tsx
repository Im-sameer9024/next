"use client"

import React, { useState } from 'react'

import { assets } from '../../public/assets/assets'
import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx";

const LivePoll = () => {

  const [select, setSelect] = useState<number>(1)
  const [option, setOption] = useState<string | null>(null)
  const [submit, setSubmit] = useState<boolean>(false)
  const [ansDetail, setAnsDetail] = useState<{ id: number, correct: boolean }[]>([])



  const saveAndNext = () => {

    const isCorrect = option === assets.questionsData[select - 1].ans;

    if (isCorrect) {
      setAnsDetail((prev) => [...prev, { id: select, correct: true }])
    } else {
      setAnsDetail((prev) => [...prev, { id: select, correct: false }])
    }


    if (select >= assets.questionsData.length) {
      setSubmit(true);
    } else {
      setSelect((prev) => prev + 1);
    }


    setOption(null);

  }


  const skip = () => {

    if (select >= assets.questionsData.length) {
      setSubmit(true)
    } else {
      setSelect((prev) => prev + 1)
    }
    setOption(null)
  }


  const previous = () => {

    if (select > 1) {
      setSelect(prev => prev - 1)
      setSubmit(false)
    }
  }





  return (
    <div className=' w-[100vw] h-auto md:h-screen'>
      <div className=' w-11/12 mx-auto'>

        {/*---------------- Top Section -------------- */}
        <div className=' flex justify-between py-3'>

          {/*------------- Left section ------------- */}
          <div className=''>

            <div>
              {/* <Image src={assets.logo} alt='Logo' className=' w-[8rem] p-0 m-0 bg-red-500' /> */}
              Logo Here
            </div>
            <h3 className=' font-Roboto text-[2rem]'>Data Science Live Poll</h3>
            <p>Name of the College</p>

          </div>

          {/*--------------- Right section ---------------------- */}
          <div className=' flex flex-col items-end gap-3 '>

            {/*--------- User info---------  */}
            <div className=' flex gap-4 items-center'>
              <p>Abhishek Sharma</p>
              <div className='w-10 h-10 rounded-full bg-gray-500'>

              </div>

            </div>

            {/*----------- Timing ----------- */}
            <div className=' flex gap-4 mr-6'>
              <div>
                <button className=' bg-[#27C200] rounded-full px-4 py-2'>Submit</button>
              </div>
              <div className=' flex flex-col items-center'>
                <p>Time Remaining</p>
                <h3 className=' font-bold text-gray-500 text-[2rem]'>02:43</h3>
              </div>
            </div>

          </div>

        </div>

        {/*----------- Question details and attempt section ------------ */}
        <div className=' w-full md:h-[400px] flex justify-between gap-4 flex-col md:flex-row'>


          {/*----------------- Questions number Left Section  --------------------- */}
          <div className=' w-full md:w-3/12 text-[#929292] overflow-y-scroll h-[50px] md:h-full flex flex-col gap-1 '>

            {
              assets.questionsData.map((item, index: number) => {
                return (
                  <div onClick={() => setSelect(item.id)} key={index} className={`flex justify-between items-center px-4 cursor-pointer py-2 ${item.id === select ? 'bg-[#606060]  rounded-md text-white font-semibold w-full' : null} `}>
                    <h3>{item.question}</h3>

                    {
                      ansDetail.find((el: { id: number; correct: boolean }) => el.id === item.id)?.correct == true
                        ?
                        (<span className="border-[#97CF83] p-[0.2rem] text-[#97CF83] border-2 rounded-lg">
                          <FaCheck />
                        </span>)
                        :
                        (<span className="border-[#FF7B82] p-[0.2rem] text-[#FF7B82] border-2 rounded-lg">
                          <RxCross2 />
                        </span>)
                    }
                  </div>
                )
              })
            }
          </div>

          {/*----------------- Question Details Right section ------------------ */}

          <div className=' md:w-9/12 w-full md:h-full border border-orange-500 flex flex-col justify-between p-8 rounded-3xl h-[400px]'>

            {/* Question Details  */}

            {
              assets.questionsData.map((item, index) => {
                return (

                  <div key={index} className={`${item.id === select ? "w-full " : "w-0 overflow-hidden"}`} >
                    <p className=' font-semibold'>{item.description}</p>
                    <div className=' text-[#929292] my-6 flex gap-4 flex-col'>

                      {/*---------- options -------- */}

                      {
                        item.options && item.options.map((el: string, index: number) => {
                          return (
                            <div key={index} className=' flex items-center gap-4'>
                              <div onClick={() => setOption(el)} className=' w-6 h-6 border-2 border-[#929292] rounded-md hover:bg-[#929292] cursor-pointer hover:bg-opacity-30 items-center flex justify-center '>
                                {option == el && <FaCheck className=' text-[#6de342]' />}
                              </div>
                              <p>{el}</p>
                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
                )
              })
            }

            <div className=' flex justify-between '>
              <button onClick={() => previous()} className=' text-[#929292] text-[2rem]'>
                <IoIosArrowBack />
              </button>
              <div className=' flex gap-3'>
                <button onClick={() => skip()} className={`px-4 py-1 rounded-full border-[#929292] text-[#929292] border-2 font-semibold hover:bg-[#929292] hover:text-white ${submit ? "hidden" : "block"} `}>Skip</button>

                <button onClick={() => saveAndNext()} className=' bg-[#F9C63D] px-4 py-1 rounded-full text-white hover:bg-[#ad8004]'> {submit ? "Submit" : "Save and Next"} </button>
              </div>
            </div>

          </div>


        </div>

      </div>

    </div >
  )
}

export default LivePoll
