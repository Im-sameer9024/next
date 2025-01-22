import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
const Signup = () => {
  // Use context API
  const { isLoading, setIsLoading, navigate } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);

    // Create FormData object to handle file uploads
    const body = {
      username: data.username,
      password: data.password,
      email: data.email,
    };

    try {
      const response = await apiRequest.post("/user/register", body);

      if (response.data?.success) {
        toast.success("User registered successfully");
        navigate("/login");
        reset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message || "Signup failed!");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-10/12 h-[500px] flex flex-col justify-center mx-auto items-center">
      <h3 className="font-Heading text-[1.2rem] my-4">
        Connect with LamaEstate
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-4/12 gap-4"
      >
        {/* Username */}
        <div>
          <label className="font-smallHeading">
            Username
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              placeholder="Username"
              className="border p-2 w-full outline-none font-text"
            />
          </label>
          {errors.username && (
            <p className="text-red-500 font-text text-[0.7rem]">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="font-smallHeading">
            Email
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              className="border p-2 w-full outline-none font-text"
            />
          </label>
          {errors.email && (
            <p className="text-red-500 font-text text-[0.7rem]">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="font-smallHeading relative">
            Password
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className="border p-2 w-full outline-none font-text"
            />
            <span onClick={() => setShowPassword(!showPassword)} className=" absolute top-8 right-4 text-[1.4rem] cursor-pointer">{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
          </label>
          {errors.password && (
            <p className="text-red-500 font-text text-[0.7rem]">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`px-8 py-2 bg-black text-white w-fit scale-105 hover:scale-100 transition-all duration-300 ease-in-out hover:font-bold ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </form>

      <Link
        to="/login"
        className="mt-4 hover:underline cursor-pointer my-2 font-text"
      >
        Already have an account? Login
      </Link>
    </div>
  );
};

export default Signup;
