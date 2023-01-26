import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../../Firebase/Firebase-config";
import AppProfile from "../AppProfile";
import About from "./About";

const AdvocateProfile = () => {
  let usersCollectionRef = collection(db, "loginUser");
  const { currentUser } = useSelector((state) => state.authentication);
  const [user, setUser]= useState({})
  const getLogedinUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
    const credential = allData.find(
      (item) =>
        item.email === currentUser?.email &&
        item.displayName === currentUser?.displayName
    );

    setUser(credential)
  };

  useEffect(() => {
    getLogedinUser();
  }, [currentUser]);
  return (
    <div>
      <AppProfile
        bgImgClass="bg-[url('./assets/images/slider-img4.png')]"
        profileImg={currentUser?.photoURL ? currentUser?.photoURL : null}
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
            <p className="font-extrabold text-center">Advocate</p>
          </div>
        }
      >
        <About user={user}/>
      </AppProfile>
    </div>
  );
};

export default AdvocateProfile;
