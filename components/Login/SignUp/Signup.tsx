"use client"

import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Signup = () => {

  const [showOtp, setShowOtp] = useState<boolean>(false)
  const [status, setStatus] = useState<boolean>(false)


  return (
    <div className=' w-[100vw] h-[100vh] overflow-hidden relative'>

      {/* opt modal  */}

      <div className={`${showOtp ? "w-[100vw] h-[100vh] " : "w-0 h-0 overflow-hidden"} flex justify-center items-center absolute z-10 bg-opacity-40`}>
        <div className=' bg-white w-[16rem] rounded-lg shadow-2xl shadow-black py-4 px-6'>
          <p className=' flex justify-between'>Enter OTP <span>00:56</span> </p>
          <div className=' mt-4 flex justify-between'>
            <input type="number" className=' number-input border border-[#818080] w-6 h-8 p-1' />
            <input type="number" className='number-input  border border-[#818080] w-6 h-8 p-1' />
            <input type="number" className='number-input  border border-[#818080] w-6 h-8 p-1' />
            <input type="number" className='number-input  border border-[#818080] w-6 h-8 p-1' />
            <input type="number" className='number-input  border border-[#818080] w-6 h-8 p-1' />
            <input type="number" className='number-input  border border-[#818080] w-6 h-8 p-1' />
          </div>
          <button className=' text-[#F9C63D] mt-4 hover:underline cursor-pointer '>Resend</button>
        </div>

      </div>

      {/* Logo  */}
      <div className=' flex justify-center mt-6'>
        <Image src={assets.logo} alt="logo" className=' w-44  ' />
      </div>

      <Image src={assets.gost} alt='logo' className=' absolute top-0  left-44 size-36 md:block hidden' />
      <Image src={assets.leftW} alt='leftW' className=' absolute top-28 left-10 h-[500px] w-[250px] md:block hidden ' />

      <div className='  w-11/12 mx-auto '>

        <div className='md:w-9/12 bg-gray-200 w-full rounded-xl md:px-[4rem] py-2 mx-auto mt-3 flex flex-col-reverse md:flex-row  md:justify-between items-center'>

          {/* form section  */}
          <div className=' md:w-5/12 w-full font-Roboto'>
            <h2 className=' font-Montserrat font-bold text-[2.5rem]'>Let's Get You In</h2>

            {/* sign up and Login form  */}
            <form>

              {
                status ?

                  // sign up form 

                  (<div>
                    {/*------ Name ---- */}
                    <div className=' w-full'>
                      <label>Name</label>
                      <input type="text" placeholder=' What should we refer you as...' className=' border border-black rounded-full p-2  w-full' />
                    </div>

                    {/*------ Email ---- */}
                    <div className=' w-full mt-3'>
                      <label>Email</label>
                      <input type="email" placeholder='Where should we send the good stuff...' className=' border border-black rounded-full p-2 w-full' />
                    </div>

                    {/*------ Student Email Id ---- */}
                    <div className=' w-full mt-3'>
                      <label>Student Email Id <span className=' ml-4 text-[0.8rem] text-gray-500 font-bold'>OPTIONAL</span> </label>
                      <input type="email" placeholder='Have a school email? Drop it here...' className=' border border-black rounded-full p-2 w-full' />
                    </div>

                    {/*------ Phone Number ---- */}
                    <div className=' w-full mt-3'>
                      <label>Phone Number</label>
                      <input type="number" placeholder=' Your number for fast access...' className=' number-input border border-black rounded-full p-2 w-full' />
                    </div>

                    {/*------ Institute Name ---- */}
                    <div className=' w-full mt-3'>
                      <label>Institute Name</label>
                      <input type="text" placeholder='Where do you study...' className=' border border-black rounded-full p-2 w-full' />
                    </div>

                  </div>)

                  :

                  // Login form 
                  (<div>
                    {/*------ Email ---- */}
                    <div className=' w-full mt-3'>
                      <label>Email</label>
                      <input type="email" placeholder='Where should we send the good stuff...' className=' border border-black rounded-full p-2 w-full' />
                    </div>

                    <div className=' flex gap-3 items-center w-full mt-3'>
                      <hr className=' border border-black w-full' />
                      <span>Or</span>
                      <hr className=' border border-black w-full' />
                    </div>

                    {/*------ Phone Number ---- */}
                    <div className=' w-full mt-3'>
                      <label>Phone Number</label>
                      <input type="number" placeholder=' Your number for fast access...' className='  number-input border border-black rounded-full p-2 w-full' />
                    </div>
                  </div>)
              }

              {/* Sign up Button  */}

              <div className=' font-Roboto mt-4 flex flex-col text-center'>
                <button onClick={() => setShowOtp(true)} className=' bg-[#F9C63D] hover:bg-[#f1b91f] font-bold text-white py-2 rounded-full '>
                  {status ? "Sign Up" : "Get OTP"}
                </button>
                <p>{status ? "Already have an account ?" : "Don’t have an account?"}  <span onClick={() => setStatus(!status)} className=' text-[#F9C63D] ml-3 hover:underline cursor-pointer '> {status ? "Login" : "Sign Up"} </span></p>
              </div>
            </form>

          </div>

          {/* text-section  */}
          <div className=' my-4 md:my-0 md:w-5/12 w-full '>
            <p className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#AD33FF] via-[#6239F4] to-[#DC41F3] md:text-[4rem] text-[2rem] font-extrabold text-center md:text-start leading-tight'>JOIN US TO BE THE <span className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#F9C63D] to-[#f2792d] md:text-[4rem] text-[2rem] font-extrabold leading-tight'>BEST KID</span> IN THE TOWN.</p>
          </div>

        </div>

      </div>

      {/* Right side images  */}
      <Image src={assets.pop} alt='pop' className=' absolute top-0 right-44 size-36 md:block hidden' />
      <Image src={assets.rightW} alt='rihgtW' className=' absolute top-28 right-10 h-[500px] w-[250px] md:block hidden' />

    </div >



  )
}

export default Signup
