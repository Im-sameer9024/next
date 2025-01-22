import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  // use context api
  const { isLoading, setIsLoading, updateUser, navigate } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    setIsLoading(true);

    try {
      const res = await apiRequest.post("/user/login", body);
      console.log("Login info", res);

      if (res.data?.success) {
        toast.success(res.data.message);
        updateUser(res.data.user);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data.message || "error in Login");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
      reset();
    }

    console.log("Login form data", body);
  };

  return (
    <div className=" w-10/12 h-[500px] flex flex-col justify-center mx-auto items-center">
      <h3 className=" font-Heading text-[1.2rem] my-4">Welcome back</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col w-4/12 gap-2 "
      >
        <div>
          <label className=" font-smallHeading">
            Email*
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email is not valid",
                },
              })}
              type="text"
              placeholder="Email"
              className=" border p-2 w-full outline-none font-text"
            />
          </label>
          {errors.email && (
            <p className=" text-red-500 font-text text-[0.7rem]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className=" font-smallHeading relative">
            Password*
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className=" border p-2 w-full outline-none font-text"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute top-8 right-4 text-[1.4rem] cursor-pointer"
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
          </label>
          {errors.password && (
            <p className=" text-red-500 font-text text-[0.7rem]">
              {errors.password.message}
            </p>
          )}
        </div>
        <Link
          to="/forgot"
          className=" text-[0.8rem] font-text hover:underline text-gray-500"
        >
          Forgot Password*
        </Link>
        <div className=" flex justify-center items-center">
          <button
            type="submit"
            className={`px-8 py-2 bg-black text-white w-fit scale-105 hover:scale-100 transition-all duration-300 ease-in-out hover:font-bold ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Login
          </button>
        </div>
      </form>
      <Link
        to="/signup"
        className="mt-4 hover:underline cursor-pointer my-2 font-text"
      >
        Do You Create An Account?
      </Link>
    </div>
  );
};

export default Login;
