import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' w-[100vw] py-8 bg-black text-white'>

      <div className=' w-11/12 mx-auto bg-black flex flex-col-reverse md:flex-row md justify-between mb-6'>

        {/* left section  */}
        <div className=' w-full md:w-4/12 space-y-6  flex flex-col justify-center mt-8 md:mt-0 text-center md:text-start'>

          <div>
            <Image src={assets.logo} alt='logo' className=' mx-auto md:mx-0' />
          </div>

          <div>
            <span></span>
            <a href="mailto:contact@brandtouchindia.in">contact@brandtouchindia.in</a>
          </div>

          <div>
            <span></span>
            <p>107, Sun Mills Compound Rd, Lower <br />Parel, Mumbai, Maharashtra 400013</p>
          </div>

        </div>

        {/* Right section  */}
        <div className=' w-full  md:w-6/12 flex justify-between'>

          <div className=' space-y-4'>
            <h3 className=' font-Roboto md:text-[2rem] text-[1.2rem] font-bold'>Quick Links</h3>
            <ul className=' space-y-3'>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Legal Disclaimer</li>
            </ul>
          </div>

          <div className=' space-y-6'>
            <ul className=' pl-4 space-y-3'>
              <li>Join Us</li>
              <li>Contact Us</li>
            </ul>
            <div className=' flex items-center'>
              <Image src={assets.brand} alt='logo' />
              <p>
                <span>BRAND<span className=' font-bold'>TOUCH</span> <br /> <span className='text-[0.8rem]'>& Analytics</span> </span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className=' flex gap-3 text-[2rem] my-4 md:my-0 justify-center md:hidden '>
          <span>
            <FaLinkedin/>
          </span>
          <span>
            <FaFacebook/>
          </span>
          <span>
          <FaInstagram/>

          </span>

        </div>

      <hr className='w-11/12 border-white mx-auto' />

      <div className=' flex mx-auto w-11/12 mt-6 md:justify-between'>
        <p> Copyright@2024 BrandTouch & Analytics Pvt. Ltd. All Rights Reserved.</p>
        <div className=' md:flex gap-3 text-[2rem] hidden  '>
          <span>
            <FaLinkedin/>
          </span>
          <span>
            <FaFacebook/>
          </span>
          <span>
          <FaInstagram/>

          </span>

        </div>
      </div>

    </div>
  )
}

export default Footer
