import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../Firebase/Firebase-config";
import AdvocateProfile from "./advocate/AdvocateProfile";
import UserProfile from "./user/UserProfile";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.authentication);
  let usersCollectionRef = collection(db, "loginUser");
  const [isAdvocate, setIsAdvocate] = useState("");
  const getLogedinUserId = async () => {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
    const credential = allData?.find(
      (item) =>
        item.email === currentUser?.email &&
        item.displayName === currentUser?.displayName
    );
    setIsAdvocate(credential?.role);
  };

  useEffect(() => {
    getLogedinUserId();
  }, [currentUser]);

  return (
    <div>
      {isAdvocate === "advocate" ? <AdvocateProfile /> : <UserProfile />}
    </div>
  );
};

export default Profile;
