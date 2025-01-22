const Profile = () => {
  return (
    <div className=" w-10/12 mx-auto h-auto">
      {/* Left side section  */}
      <div className="  w-7/12">
        <div className=" flex justify-between items-center">
          <h3 className=" font-Heading text-[1.3rem]">User Information</h3>
          <button className=" px-6 py-2 bg-yellow rounded-lg hover:bg-darkYellow transition-all duration-300 hover:scale-95 font-smallHeading ">
            Update Profile
          </button>
        </div>

        <div className=" space-y-3 mt-6">
          <div>
            <span className=" font-bold font-smallHeading text-[1.2rem]">Avatar:</span>
            <span>
              <img src="" alt="" />
            </span>
          </div>
          <div>
            <span>Avatar:</span>
            <span>John</span>
          </div>
          <div>
            <span>E-mail:</span>
            <span></span>
          </div>
        </div>
      </div>
      {/* Right side section  */}
    </div>
  );
};

export default Profile;
