import { useForm } from "react-hook-form";

const SearchSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const body = {
      location: data.location,
      type: data.type,
      propertyType: data.propertyType,
      minPrice: data.minPrice,
      maxPrice: data.maxPrice,
      bedrooms:data.bedrooms
    };

    console.log(body);
  };

  return (
    <div className=" w-full">
      <h3 className=" font-smallHeading font-semibold text-[1.2rem] ">Search results for</h3>

      <form onSubmit={handleSubmit(onSubmit)} className=" w-full font-text font-light space-y-3">
        {/* location  */}
        <div className=" w-full">
          <label>
            Location: 
            <input
              type="text"
              {...register("location", { required: "required*" })}
              placeholder="City Location"
              className=" border border-slate-300 outline-none p-1 w-full"
            />
          </label>
          {errors.location && <span className=" font-smallHeading text-red-500">{errors.location.message}</span>}
        </div>

        {/* type,property,minPrice,maxPrice,search  */}
        <div className=" flex gap-2">
          {/* type  */}
          <label>
            Type
            <select id="type" {...register("type", { required: "required*" })} className=" border border-slate-300 outline-none p-1 w-full">
              <option value="">any</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
            </select>
            {errors.type && <span className=" font-smallHeading text-red-500">{errors.type.message}</span>}
          </label>

          {/* Property */}
          <label>
            Property
            <select
              id="propertyType"
              {...register("propertyType", { required: "required*" })}
              className=" border border-slate-300 outline-none p-1 w-full">
              <option value="">any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="land">Land</option>
            </select>
            {errors.propertyType && <span className=" font-smallHeading text-red-500">{errors.propertyType.message}</span>}
          </label>

          {/* Min Price */}
          <label>
            Min Price
            <input
              type="number"
              placeholder="Minimum price"
              
              {...register("minPrice", { required: "required*", valueAsNumber:true, min:{value:10000 ,message:"Min value 10000"} })}
              className=" border border-slate-300 outline-none p-1 w-full"/>
            {errors.minPrice && <span className=" font-smallHeading text-red-500">{errors.minPrice.message}</span>}
          </label>

          {/* Max Price */}
          <label>
            Max Price
            <input
              type="number"
              placeholder="Maximum price"
              {...register("maxPrice", { required: "required*" , valueAsNumber:true, min:{value:50000,message:"Min value 50000"} })}
              className=" border border-slate-300 outline-none p-1 w-full"/>
            {errors.maxPrice && <span className=" font-smallHeading text-red-500">{errors.maxPrice.message}</span>}
          </label>

          {/* bedroom  */}
          <label>
            Bedrooms
            <select
              id="bedrooms"
              {...register("bedrooms", { required: "required*" })}
              className=" border border-slate-300 outline-none p-1 w-full">
              <option value="">any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.bedrooms && <span className=" font-smallHeading text-red-500">{errors.bedrooms.message}</span>}
          </label>
        </div>

        <div>
            <button className=" px-6 py-2 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading hover:font-bold">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;
