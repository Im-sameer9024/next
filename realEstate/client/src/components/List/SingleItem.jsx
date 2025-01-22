import { useState } from "react";
import { singlePostData } from "../../dummyDate/Date";
import { CiLocationOn } from "react-icons/ci";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { RiCustomSize } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { RiBusWifiFill } from "react-icons/ri";
import { IoIosRestaurant } from "react-icons/io";

const SingleItem = () => {
  const data = singlePostData;

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className=" w-10/12 mx-auto flex gap-2">
      {/* Left side  */}
      <div className=" w-7/12 space-y-4">
        {/* Image gallery section  */}
        <div className=" w-full flex gap-4 h-[300px]">
          <div className="w-9/12 h-full ">
            <img
              src={data.images[imgIndex]}
              alt="img"
              className=" object-cover w-full h-full rounded-lg"
            />
          </div>

          <div className=" w-3/12 h-full overflow-y-scroll space-y-4 scrollbar-thin px-2">
            {data.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="image"
                className=" object-cover w-full h-[100px] rounded-lg cursor-pointer hover:shadow-md hover:scale-95 transition-all duration-300 ease-in-out"
                onClick={() => setImgIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Broker details  */}
        <div className=" flex flex-col gap-1">
          <h3 className=" font-Heading">{data.title}</h3>
          <p className="flex items-center  font-smallHeading font-light ">
            <span>
              <CiLocationOn />
            </span>
            {data.address}
          </p>
          <span className=" bg-slate-200 w-fit py-1 px-2 font-text rounded-lg ">
            ₹ {data.price}
          </span>
        </div>

        {/* details  */}
        <div>
          <p className=" font-light font-text text-[0.8rem]">
            {" "}
            {data.description}{" "}
          </p>
        </div>
      </div>

      {/* Right side  */}
      <div className=" w-5/12 bg-red-50 p-4 rounded-lg flex flex-col justify-between">
        {/* Generals  */}
        <div className=" bg-white rounded-lg p-2">
          <h3 className=" font-Heading">General</h3>

          <div className=" space-y-2 mt-4">

            <div className=" flex items-center gap-2">
              <span className=" text-[1.4rem]">
                <MdMiscellaneousServices />
              </span>
              <p className=" flex flex-col ">
                <span className=" font-smallHeading font-bold">Utilities</span>
                <span className=" font-text font-light text-[0.8rem]">Renter is responsible</span>
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <span className=" text-[1.4rem]">
                <MdOutlinePets />
              </span>
              <p  className=" flex flex-col ">
                <span className=" font-smallHeading font-bold">Pet Policy</span>
                <span  className=" font-text font-light text-[0.8rem]">Pets Allowed</span>
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <span className=" text-[1.4rem]">
                <RiMoneyRupeeCircleLine />
              </span>
              <p  className=" flex flex-col ">
                <span className=" font-smallHeading font-bold">Property Fees</span>
                <span  className=" font-text font-light text-[0.8rem]">Must have 3x the rent in total household income</span>
              </p>
            </div>
          </div>
        </div>

        {/* Room size  */}
        <div className=" bg-white rounded-lg p-2">
          <h3 className=" font-Heading">Room Sizes</h3>
          <div className=" flex justify-between mt-4">
            <p className=" flex items-center gap-1 font-smallHeading">
              <span className=" text-[1.4rem]">
                <RiCustomSize />
              </span>
              80sqm
            </p>
            <p className=" flex items-center gap-1 font-smallHeading">
              <span className=" text-[1.4rem]">
                <FaBed />
              </span>
              2bed
            </p>
            <p className=" flex items-center gap-1 font-smallHeading">
              <span className=" text-[1.4rem]">
                <MdBathtub />
              </span>
              1bathroom
            </p>
          </div>
        </div>

        {/* Nearby Places  */}
        <div className=" bg-white rounded-lg p-2">
          <h3 className=" font-Heading">Nearby Places</h3>

          <div className=" flex justify-between mt-4">
            <div className=" flex items-center gap-2">
              <span className=" text-[1.4rem]">
                <FaSchool />
              </span>
              <p className=" flex flex-col ">
                <span  className=" font-smallHeading font-bold">School</span>
                <span className=" font-text font-light text-[0.8rem]">250 away</span>
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <span className=" text-[1.4rem]">
                <RiBusWifiFill />
              </span>
              <p className=" flex flex-col ">
                <span className=" font-smallHeading font-bold">Bus Stop</span>
                <span className=" font-text font-light text-[0.8rem]">100m away</span>
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <span className=" text-[1.4rem]">
                <IoIosRestaurant />
              </span>
              <p className=" flex flex-col ">
                <span className=" font-smallHeading font-bold">Restaurant</span>
                <span className=" font-text font-light text-[0.8rem]">200m away</span>
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SingleItem;
