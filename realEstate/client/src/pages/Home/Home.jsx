import {  useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

const Home = () => {





  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [typeProperty, setTypeProperty] = useState();

  const onSubmit = (data) => {
    const body = {
      propertyFor: data.propertyFor,
      location: data.city,
      minPrice: data.minPrice,
      maxPrice: data.maxPrice,
    };

    console.log("Form data", body);
  };

  return (
    <div className=" w-10/12 mx-auto md:flex items-center  gap-4 ">

      {/* Left side  */}
      <div className=" w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className=" font-Heading font-bold sm:text-[1.5rem] text-center sm:text-center md:text-start md:text-[2rem] lg:text-[2.5rem]">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className=" font-text font-light text-center sm:text-center md:text-start">
          Elevate your lifestyle with LamaEstate, where luxury meets comfort. We
          offer exquisite properties in prime locations, tailored to fit your
          dreams. Our dedicated team provides personalized service, ensuring a
          seamless and rewarding real estate journey. Discover your perfect
          home, investment, or rental with LamaEstate – where your future
          begins.
        </p>

        {/* form  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.propertyFor && (
            <span className="text-red-500 font-smallHeading">
              {errors.propertyFor.message}
            </span>
          )}
          <div>
            <button
              type="button"
              className={`px-6 py-2 ${
                typeProperty === "Buy"
                  ? "bg-black text-white"
                  : "bg-white border"
              }`}
              onClick={() => {
                setTypeProperty("Buy");
                setValue("propertyFor", "Buy");
              }}
            >
              Buy
            </button>

            <button
              type="button"
              className={`px-6 py-2 ${
                typeProperty === "Rent"
                  ? "bg-black text-white"
                  : "bg-white border"
              }`}
              onClick={() => {
                setTypeProperty("Rent");
                setValue("propertyFor", "Rent");
              }}
            >
              Rent
            </button>
          </div>

          {/* property type  */}
          <input
            type="hidden"
            {...register("propertyFor", { required: "Select a option*" })}
          />

          <div className=" flex flex-col md:flex-row lg:w-6/12 ">
            <div>
              <input
                {...register("city", { required: "required*" })}
                type="text"
                placeholder="City"
                className=" border pl-2 outline-none py-2"
              />
              {errors.city && (
                <span className="text-red-500 font-smallHeading">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("minPrice", { required: "required*" })}
                type="number"
                placeholder="Min Price"
                className=" border pl-2 outline-none py-2"
              />
              {errors.minPrice && (
                <span className="text-red-500 font-smallHeading">
                  {errors.minPrice.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("maxPrice", { required: "required*" })}
                type="number"
                placeholder="Max Price"
                className=" border pl-2 outline-none py-2"
              />
              {errors.maxPrice && (
                <span className="text-red-500 font-smallHeading">
                  {errors.maxPrice.message}
                </span>
              )}
            </div>

            <div >
              <button  className=" px-6 py-4 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading hover:font-bold" type="submit">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>

        {/* info  */}
        <div className=" flex justify-between">
          {/* experience  */}
          <div className=" text-center">
            <h2 className=" font-smallHeading font-bold sm:text-[1.4rem] md:text-[2rem]">16+</h2>
            <p className=" font-text font-light text-[0.6rem] md:text-[1rem]">Year of Experience</p>
          </div>

          {/* Awards  */}
          <div className=" text-center">
            <h2 className=" font-smallHeading font-bold sm:text-[1.4rem] md:text-[2rem]">200</h2>
            <p className=" font-text font-light text-[0.6rem] md:text-[1rem]">Award Gained</p>
          </div>

          {/* Property  */}
          <div className=" text-center">
            <h2 className=" font-smallHeading font-bold sm:text-[1.4rem] md:text-[2rem]">1200+</h2>
            <p className=" font-text font-light text-[0.6rem] md:text-[1rem]">Property Ready</p>
          </div>
        </div>
      </div>

      {/* Right side  */}
      <div className=" hidden lg:block lg:w-6/12">
        <img
          src={"/bg.png"}
          alt=" bg-Image"
          className=" object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Home;
