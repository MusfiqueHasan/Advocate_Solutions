import React from "react";
import img from "../../assets/images/profile-img.png";

const AppProfile = ({
  children,
  shortInfo,
  othersInfo,
  profileImg,
  bgPosition = "bg-center",
  bgImgClass,
  callback,
}) => {
 

  return (
    <div className="h-full font-poppins overflow-hidden">
      <div className={`${bgImgClass} ${bgPosition} bg-cover h-60 w-full`}></div>

      <div className="bg-[#ffffff] h-20 pl-[8.5rem] shadow-md relative flex items-center">
        <div className="avatar absolute left-44 3xl:left-80 bottom-5">
          <div className="w-32 rounded-full ring ring-[#ffffff] ring-offset-base-100 ring-offset-2">
         
            <img src={profileImg !==null ? profileImg : img} alt='' className="w-full rounded-full" />
          </div>
        </div>

        <div className=" absolute left-[22%] 3xl:left-[26%] flex items-center justify-between w-[67%] 3xl:w-[58%]">
          <div className="flex items-center">
            <div className=" border-r-2 border-gray-300 px-7">{shortInfo}</div>
            <div className="ml-7">{othersInfo}</div>
          </div>
        </div>
      </div>
      <div className="px-28 py-5">{children}</div>
    </div>
  );
};

export default AppProfile;
