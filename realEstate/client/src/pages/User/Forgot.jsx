import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const Forgot = () => {

  // use context api 
 const{isLoading,setIsLoading,navigate} = useContext(AuthContext)

  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const body = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    };

    setIsLoading(true)

    try {

      const res = await apiRequest.put("/user/forgot-password",body)

      if(res.data?.success){
        toast.success(res.data.message)
        navigate("/login")
      }else{
        toast.error(res.data.message)
      }
      
    } catch (error) {

      if(error.response?.data){
        toast.error(error.response?.data?.message)
      }else{
        toast.error("Network error,Something went wrong")
      }
      
    }finally{
      setIsLoading(false)
      reset()
    }



    console.log("password change page", body);
  };

  return (
    <div className=" w-10/12 h-[500px] flex flex-col justify-center mx-auto items-center">
      <h3 className=" font-Heading text-[1.2rem] my-4">Forgotten Password</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col w-4/12 gap-2 "
      >
        {/* old password  */}
        <div>
          <label className=" font-smallHeading">
            Old Password*
            <input
              {...register("oldPassword", { required: "required*" })}
              type="password"
              placeholder="Old Password"
              className=" border p-2 w-full outline-none font-text"
            />
          </label>
          {errors.oldPassword && (
            <p className=" text-red-500 font-text text-[0.7rem]">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        {/* new password  */}
        <div>
          <label className=" font-smallHeading">
            New Password*
            <input
              {...register("newPassword", { required: "required*" })}
              type="password"
              placeholder="New Password"
              className=" border p-2 w-full outline-none font-text"
            />
          </label>
          {errors.oldPassword && (
            <p className=" text-red-500 font-text text-[0.7rem]">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        {/* confirm password  */}
        <div>
          <label className=" font-smallHeading">
            Confirm Password*
            <input
              {...register("confirmPassword", { required: "required*" })}
              type="password"
              placeholder="Confirm Password"
              className=" border p-2 w-full outline-none font-text"
            />
          </label>
          {errors.oldPassword && (
            <p className=" text-red-500 font-text text-[0.7rem]">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        {/* submit button  */}
        <div className=" flex justify-center items-center">
          <button
            type="submit"
            className={`px-8 py-2 bg-black text-white w-fit scale-105 hover:scale-100 transition-all duration-300 ease-in-out hover:font-bold ${isLoading ? "cursor-not-allowed":"cursor-pointer"}`}
          >
            Submit
          </button>
        </div>
      </form>
      <Link
        to="/login"
        className="mt-4 hover:underline cursor-pointer my-2 font-text"
      >
        Do You want to Login?
      </Link>
    </div>
  );
};

export default Forgot;
