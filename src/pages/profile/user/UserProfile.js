
import React from "react";
import { useSelector } from "react-redux";
import AppProfile from "../AppProfile";
import About from "./About";

const UserProfile = () => {
    const { currentUser } = useSelector((state) => state.authentication);
    
  return (
    <div>
      <AppProfile
        bgImgClass="bg-[url('./assets/images/bg-testimonials.jpg')]"
        profileImg={currentUser?.photoURL? currentUser?.photoURL:null}
        shortInfo={
          <div>
            <p className="text-sm text-gray-500">
              <span className=""> Name </span>
            </p>
            <p className="font-extrabold ">{currentUser?.displayName}</p>
          </div>
        }
        othersInfo={
          <div>
            <p className="text-sm text-gray-500 text-center">Role</p>
            <p className="font-extrabold text-center">User</p>
          </div>
        }
      >
        <About />
      </AppProfile>
    </div>
  );
};

export default UserProfile;
