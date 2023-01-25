import React from "react";
import { useSelector } from "react-redux";
import AppProfile from "../AppProfile";
import About from "./About";

const AdvocateProfile = () => {
  const { currentUser } = useSelector((state) => state.authentication);
  console.log(currentUser);
  return (
    <div>
      <AppProfile
        bgImgClass="bg-[url('./assets/images/slider-img4.png')]"
        profileImg={currentUser?.photoURL ? currentUser?.photoURL : null}
        shortInfo={
          <div>
            <p className="font-extrabold ">{currentUser?.displayName}</p>
            <p className="text-sm text-gray-500">
              <span className=""> Advocate </span>
            </p>
          </div>
        }
        othersInfo={
          <div>
            <p className="text-sm text-gray-500 text-center">Email</p>
            <p className="font-extrabold text-center">{currentUser?.email}</p>
          </div>
        }
      >
        <About />
      </AppProfile>
    </div>
  );
};

export default AdvocateProfile;
