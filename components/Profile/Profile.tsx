import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import ResultAnalysisChart from './ResultAnaysisChart';


const Profile = () => {

  const rightAnswers = 15;
  const wrongAnswers = 5;
  const noAnswers = 3;
  const notAttempted = 7;


  return (
    <div className=' w-[100vw] h-auto'>

      <div className='w-11/12 mx-auto'>

        {/* User details  */}
        <div className=' w-full rounded-xl border md:px-4 lg:px-8 md:py-3 p-2 border-[#F89E21] flex flex-col md:flex-row  items-center'>

          {/* image  */}
          <div >
            <div className=' border-[4px] border-[#27C200] p-1 rounded-full relative'>
              <Image src={assets.user} alt='image' className=' rounded-full w-[7rem] h-[7rem] xl:w-[8rem] xl:h-[8rem] object-cover' />
              <div className=' border-[4px] border-[rgb(217,217,217)] rounded-full bg-[#27C200] absolute bottom-0 right-0'>
                <MdOutlineModeEdit className=' text-white w-8 h-8 p-1' />
              </div>
            </div>
            <p className=' text-center font-Roboto  font-bold text-[1.4rem]'>user-26e54</p>
          </div>

          {/* details  */}

          <div className=' font-Roboto md:ml-8  '>
            <div className=' text-center md:text-start'>
              <h3 className=' text-[1.4rem] font-bold'>Deepika S.</h3>
              <p className=' text-[#424242] text-[1.2rem]'>deepika6789@examplemail.com</p>
            </div>
            <div className=' mt-4 text-center md:text-start'>
              <h3 className=' text-[#424242] text-[0.8rem]'>Institute Name</h3>
              <p className=' text-[1.3rem] font-bold'>Example Institute of Example & Example Sciences</p>
            </div>
          </div>

          {/* buttons  */}
          <div className=' xl:ml-[8rem]  flex flex-col items-center py-2 md:items-end md:w-6/12 lg:w-5/12 w-full  '>
            <button className=' bg-[#F9C63D] text-white px-[4rem] rounded-full py-2 flex items-center'>
              <span>
                <MdOutlineModeEdit />
              </span>
              Edit Profile</button>
            <div className=' bg-[#99E786] rounded-full mt-8 flex items-center xl:px-[4rem] px-6 py-2 gap-2 lg:gap-8 w-full '>

              <div>
                <h3 className=' text-[1rem] '>Level</h3>
                <p className=' text-[1.4rem] font-bold'>Beginner</p>
              </div>
              <div className='w-full'>
                <p className=' font-semibold'>100 XP to level up</p>
                <div className=' bg-white mt-2 p-2 w-full rounded-full relative '>
                  <div className=' bg-black absolute rounded-full w-[70%] p-2 left-0 top-0 '></div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Prize details  */}
        <div className=' w-full flex flex-col md:flex-row  gap-4 mt-4'>

          {/* left side section  */}
          <div className=' w-full lg:w-5/12 md:w-7/12  rounded-xl border p-3 border-[#F89E21] font-Roboto'>

            <div className=' w-full flex items-center justify-between'>
              <h3 className=' font-bold text-[1rem] md:text-[1.4rem]'>My Trophy Cabinet</h3>
              <span className=' text-[#F89E21]'>See all</span>
            </div>
            <div className=' w-full mt-6 flex flex-wrap md:gap-4 justify-around gap-1'>

              <div className=' flex flex-col item-center'>
                <span className=' flex items-center justify-center'>
                  <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                </span>
                <p className=' text-[0.8rem]'>Python Wizard</p>
              </div>

              <div className=' flex flex-col item-center'>
                <span className=' flex items-center justify-center'>
                  <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                </span>
                <p className=' text-[0.8rem]'>Python Wizard</p>
              </div>

              <div className=' flex flex-col item-center'>
                <span className=' flex items-center justify-center'>
                  <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                </span>
                <p className=' text-[0.8rem]'>Python Wizard</p>
              </div>

              <div className=' flex flex-col item-center'>
                <span className=' flex items-center justify-center'>
                  <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                </span>
                <p className=' text-[0.8rem]'>Python Wizard</p>
              </div>

              <div className=' flex flex-col item-center'>
                <span className=' flex items-center justify-center'>
                  <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                </span>
                <p className=' text-[0.8rem]'>Python Wizard</p>
              </div>

              <div className=' flex flex-col item-center'>
                <span className=' flex items-center justify-center'>
                  <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                </span>
                <p className=' text-[0.8rem]'>Python Wizard</p>
              </div>
            </div>


          </div>

          {/* Right side section  */}
          <div className=' w-full flex flex-col gap-4'>
            <div className=' w-full rounded-xl border p-3 border-[#F89E21]'>
              <div className=' flex items-center justify-between'>
                <h3 className=' font-bold text-[1rem] md:text-[1.4rem]'>Badges Earned</h3>
                <span className=' text-[#F89E21]'>See all</span>
              </div>
              <div className=' mt-6 flex flex-wrap gap-4 justify-around'>

                <div className=' flex flex-col item-center'>
                  <span className=' flex items-center justify-center'>
                    <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                  </span>
                  <p className=' text-[0.8rem]'>Python Wizard</p>
                </div>

                <div className=' flex flex-col item-center'>
                  <span className=' flex items-center justify-center'>
                    <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                  </span>
                  <p className=' text-[0.8rem]'>Python Wizard</p>
                </div>

                <div className=' flex flex-col item-center'>
                  <span className=' flex items-center justify-center'>
                    <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                  </span>
                  <p className=' text-[0.8rem]'>Python Wizard</p>
                </div>

                <div className=' flex flex-col item-center'>
                  <span className=' flex items-center justify-center'>
                    <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                  </span>
                  <p className=' text-[0.8rem]'>Python Wizard</p>
                </div>

                <div className=' flex flex-col item-center'>
                  <span className=' flex items-center justify-center'>
                    <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                  </span>
                  <p className=' text-[0.8rem]'>Python Wizard</p>
                </div>

                <div className=' flex flex-col item-center'>
                  <span className=' flex items-center justify-center'>
                    <IoTrophyOutline className=' w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]' />
                  </span>
                  <p className=' text-[0.8rem]'>Python Wizard</p>
                </div>

              </div>

            </div>

            <div className=' w-full rounded-xl border p-3 border-[#F89E21]'>
              <div className=' flex items-center justify-between'>
                <h3 className=' font-bold text-[1rem] md:text-[1.4rem]'>Recent History</h3>
                <span className=' text-[#F89E21]'>See all</span>
              </div>
              <div className=' mt-6 flex  gap-2 justify-between'>

                <div className=' font-semibold'>
                  <h3>Big Three Aptitude Test</h3>
                  <h3>Big Three Aptitude Test</h3>
                  <h3>Big Three Aptitude Test</h3>
                </div>

                <div className=' hidden md:block'>
                  <p>5 Questions</p>
                  <p>5 Questions</p>
                  <p>5 Questions</p>
                </div>

                <div className=' hidden md:block'>
                  <p>Completed in 3:34</p>
                  <p>Completed in 3:34</p>
                  <p>Completed in 3:34</p>
                </div>

                <div>
                  <p>Score 23</p>
                  <p>Score 23</p>
                  <p>Score 23</p>
                </div>

              </div>

            </div>
          </div>


        </div>

        < h3 className=' font-bold text-[1.4rem] mt-4' > My Stats</h3 >

        <div className=' flex flex-col md:flex-row justify-between w-full'>
          {/* left side section  */}
          <div className=' w-full  md:w-7/12'>
            {/* upper section  */}
            <div className='flex gap-4 flex-wrap lg:flex-nowrap'>

              <div className=' w-[45%] lg:w-full rounded-xl border p-2 border-[#F89E21] flex flex-col justify-center items-center'>
                <h3>Quizzes Attempted</h3>
                <p className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#AD33FF] via-[#6239F4] to-[#DC41F3] md:text-[4rem] text-[1.9rem] font-extrabold leading-tight'>
                  13
                </p>

              </div>

              <div className='  w-[45%] lg:w-full rounded-xl border p-2 border-[#F89E21] flex flex-col justify-center items-center'>
                <h3>Quizzes Attempted</h3>
                <p className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#AD33FF] via-[#6239F4] to-[#DC41F3] md:text-[4rem] text-[1.9rem] font-extrabold leading-tight'>
                  123
                </p>

              </div>

              <div className=' w-[45%] lg:w-full rounded-xl border p-2 border-[#F89E21] flex flex-col justify-center items-center'>
                <h3>Accuracy</h3>
                <p className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#AD33FF] via-[#6239F4] to-[#DC41F3] md:text-[4rem] text-[1.9rem] font-extrabold leading-tight'>
                  56%
                </p>

              </div>

              <div className=' w-[45%] lg:w-full rounded-xl border p-2 border-[#F89E21] flex flex-col justify-center items-center'>
                <h3>College Rank</h3>
                <p className=' font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#AD33FF] via-[#6239F4] to-[#DC41F3] md:text-[4rem] text-[1.9rem] font-extrabold leading-tight'>
                  43
                </p>

              </div>

            </div>

            <div className=' flex flex-col md:flex-row items-center my-4 md:mt-0'>
              <div>
                <Image src={assets.rocket} alt='logo' className=' object-cover md:size-72 size-52' />
              </div>
              <div className=' ml-6 space-y-4 text-center md:text-start'>
                <h3 className=' font-Montserrat text-[1.6rem] font-bold'>Join Quizzes to gain XP
                  and earn prizes</h3>
                <p className=' text-[#929292] font-Roboto'>Challenge yourself and rise to the top</p>
                <div className=' flex justify-center items-center'>
                  <button className=' bg-[#F9C63D] px-8 py-2 rounded-full text-white'>Let solve Problems</button>
                </div>
              </div>
            </div>

          </div>

          {/* right side section  */}
          <div className=' w-full md:w-4/12'>
            <ResultAnalysisChart
              rightAnswers={rightAnswers}
              wrongAnswers={wrongAnswers}
              noAnswers={noAnswers}
              notAttempted={notAttempted}
            />
          </div>
        </div>



      </div>

    </div>
  )
}

export default Profile
