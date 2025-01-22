/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <Link to={`/list/${item.id}`} className=" w-full flex gap-4 hover:scale-95 transition-all duration-300 ease-in-out">
      <div className="w-[240px] h-[10rem] ">
        <img
          src={item.img}
          alt="Image"
          className="w-full h-full object-cover rounded-lg hover:shadow-lg"
        />
      </div>
      <div className=" w-6/12 flex flex-col justify-between">
        <h3 className=" font-Heading">{item.title}</h3>
        <p className="flex items-center  font-smallHeading font-light ">
          <span>
            <CiLocationOn />
          </span>
          {item.address}
        </p>
        <span className=" bg-slate-200 w-fit py-1 px-2 font-text rounded-lg ">₹ {item.price}</span>

        <div className=" flex items-center justify-between font-text font-light">
          <p className=" flex items-center gap-2 bg-red-100 px-1 rounded-lg">
            <span>
                <FaBed/>
            </span>
            {item.bedroom} bedroom
          </p>
          <p className=" flex items-center gap-2 bg-red-100 px-1 rounded-lg">
            <span>
                <MdBathtub/>
            </span>
            {item.bathroom} bathroom
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
