import { Link } from "react-router-dom";
import { pages } from "../../dummyDate/Date";
import { useContext } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { AuthContext } from "../../context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import apiRequest from "../../../lib/apiRequest";
import toast from "react-hot-toast";

const Navbar = () => {
  const {
    currentUser,
    location,
    navigate,
    show,
    setShow,
    setIsLoading,
    updateUser,
  } = useContext(AuthContext);

  const logout = async () => {
    setIsLoading(true);

    try {
      const res = await apiRequest.get("/user/logout");

      if (res.data?.success) {
        toast.success(res.data?.message);
        updateUser(null);
        navigate("/");
      } else {
        toast.error(res.data?.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-full">
      <div className=" w-11/12 flex items-center justify-between mx-auto py-2 relative">
        {/* logo  */}
        <Link to="/" className=" flex items-baseline gap-2">
          <img src="/logo.png" alt="Logo" className="size-10" />
          <span className=" font-Heading font-bold text-[1.3rem] hidden sm:block">
            LamaEstate
          </span>
        </Link>

        {/* pages  */}
        <div className=" gap-4 hidden md:flex justify-between font-smallHeading">
          {pages.map((page, i) => (
            <Link
              to={page == "Home" ? "/" : page.toLowerCase()}
              key={i}
              className={`${
                location.pathname ==
                (page == "Home" ? "/" : `/${page.toLowerCase()}`)
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              {page}
            </Link>
          ))}
        </div>

        {currentUser ? (
          <div className=" relative flex gap-4 ">
            <div className=" group cursor-pointer flex items-center ">
              <span className=" text-[1.4rem] flex items-baseline gap-2">
                <FaUserAlt />
                <span className=" font-text text-[0.7rem]">
                  {currentUser.username}
                </span>
              </span>
              <div className=" bg-slate-100 py-2 px-4 absolute top-8 -left-20 rounded-lg group-hover:block hidden cursor-pointer">
                <button
                  onClick={logout}
                  className=" px-2 py-1 rounded-lg hover:font-bold transition-all duration-300 "
                >
                  Log Out
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate("/profile")}
                className=" px-6 py-2 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading hover:font-bold"
              >
                Profile
              </button>
            </div>
          </div>
        ) : (
          <div className=" hidden sm:flex gap-2">
            <button
              onClick={() => navigate("/login")}
              className=" px-6 py-2 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading hover:font-bold"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className=" px-6 py-2 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading hover:font-bold"
            >
              Sign Up
            </button>
          </div>
        )}

        {/* mobile screen navbar  */}
        <div className=" sm:hidden">
          {/* hamburger icon */}
          <div onClick={() => setShow(!show)} className=" size-10 z-10">
            {show ? (
              <span className=" text-[2.5rem]">
                <IoCloseCircle />
              </span>
            ) : (
              <img src={"/menu.png"} alt="" />
            )}
          </div>

          <div
            className={`bg-black overflow-hidden  rounded-lg  absolute top-14 right-0 transition-all duration-500 ease-in-out ${
              show ? " w-[250px]  h-[300px] " : " w-0 h-0  "
            } `}
          >
            {/* all links  */}
            <div className=" gap-8 mt-4 flex flex-col justify-between font-smallHeading text-white p-1">
              {pages.map((page, i) => (
                <Link
                  to={page == "Home" ? "/" : page.toLowerCase()}
                  key={i}
                  className={` hover:bg-white hover:text-black  rounded-lg px-4 ${
                    location.pathname ==
                    (page == "Home" ? "/" : `/${page.toLowerCase()}`)
                      ? "font-bold"
                      : "font-normal"
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>

            {/* Login and Signup  */}
            <div className=" flex px-4 justify-between mt-6">
              <button
                onClick={() => navigate("/login")}
                className=" px-6 py-2 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading hover:font-bold"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className=" px-6 py-2 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading hover:font-bold"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
