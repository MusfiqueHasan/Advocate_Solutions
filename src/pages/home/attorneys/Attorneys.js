import React, { useState, useEffect } from "react";
import "./Attorneys.css";
import titlelineimg from "../../../Assets/icons/title-line-image-2.png";
import lawyer1 from "../../../Assets/images/lawyer1.jpg";
import lawyer2 from "../../../Assets/images/lawyer2.jpg";
import lawyer3 from "../../../Assets/images/lawyer3.jpg";
import lawyer4 from "../../../Assets/images/lawyer4.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';

import { collection, getDocs } from "firebase/firestore";

import { Link } from 'react-router-dom';
import { db } from "../../../Firebase/Firebase-config";
const Attorneys = () => {
  const [advocates, setAdvocates] = useState([]);
  console.log(advocates, "advocates data");

  const advocatesCollectionRef = collection(db, "advocates");

  useEffect(() => {

    const getadvocates = async () => {

      const data = await getDocs(advocatesCollectionRef);

      console.log(data, "data");
      setAdvocates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getadvocates();
  }, []);
  return (
    <div>
      <div className=" mt-12 ">
        <div className="attorney_title flex flex-col justify-center items-center gap-y-3 ">
          <h1 className=" text-3xl font-bold text-center mt-5 ">
            Meet Our Attorneys
          </h1>
          <img src={titlelineimg} alt="title-line-img" />
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7  px-36 py-5">
        {advocates?.map((elem) => (
          <div key={elem.id} className=" shadow-md p-3">
            <div className=" w-[200px] h-[200px]">
              <img src={elem?.image} alt="" className=" w-full h-full" />
            </div>

            <h1 className=" text-xl font-bold">{elem?.fname} {elem?.lname}</h1>
            <p className=" text-lg text-gold">{elem?.designation}</p>
            <div className=" border-b-2 mr-7 my-5"></div>
            <div className=" flex justify-start items-center gap-x-5 my-2">
              <button className=" text-gold">
                <AssuredWorkloadOutlinedIcon />
              </button>
              <p className=" text-gray-400">{elem?.area_of_practice}</p>
            </div>
            <div className=" flex justify-start items-center gap-x-5">
              <button className=" text-gold">
                <MailOutlineIcon />
              </button>
              <p className=" text-gray-400">{elem?.email}</p>
            </div>

            <div className=" flex justify-start gap-x-5 items-center my-3">
              <button className=" border shadow-sm p-2 text-gray-500 hover:bg-gold hover:text-white rounded-md transition duration-300">
                <FacebookOutlinedIcon />
              </button>
              <button className=" border shadow-sm p-2 text-gray-500 hover:bg-gold hover:text-white rounded-md transition duration-300">
                <GoogleIcon />
              </button>
              <button className="border shadow-sm p-2 text-gray-500 hover:bg-gold hover:text-white rounded-md transition duration-300">
                <TwitterIcon />
              </button>
              <button className=" border shadow-sm p-2 text-gray-500 hover:bg-gold hover:text-white rounded-md transition duration-300">
                <LinkedInIcon />
              </button>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default Attorneys;
