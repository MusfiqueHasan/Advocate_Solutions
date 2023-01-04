import React from "react";
import "./Footer.css";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation().pathname;
  return (
    <div
      className={`${
        location === "/comunity" || location === "/" ? "hidden" : "block"
      } footerBg mt-20`}
    >
      <div className=" grid grid-cols-3 gap-5 px-20">
        <div className=" flex flex-col justify-center items-center">
          <div className=" bg-gold hover:animate-pulse text-center transition duration-700 p-4 -mt-10 z-50 w-16">
            <PlaceIcon fontSize="large" />
          </div>
          <div className=" text-center pt-5 pb-20">
            <h1 className=" text-2xl font-bold pb-2 ">Visit Our Office</h1>
            <p className=" line "></p>
            <p className=" text-base font-medium text-gray-300 py-4 ">
              5648, VK 26th Lane Sparks Steet, <br /> Opp Joe Park-Florida
              26154.
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className=" bg-gold hover:animate-pulse text-center transition duration-700 p-4 -mt-10 z-50 w-16">
            <PhoneIcon fontSize="large" />
          </div>
          <div className=" text-center pt-5 pb-20">
            <h1 className=" text-2xl font-bold pb-2 ">Get Touch With Us</h1>
            <p className=" line "></p>
            <p className=" text-base font-medium text-gray-300 py-4 ">
              +123 859 625, +321 569 742 <br /> advocateSolutions@example.com
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className=" bg-gold hover:animate-pulse text-center transition duration-700 p-4 -mt-10 z-50 w-16">
            <AccessTimeIcon fontSize="large" />
          </div>
          <div className=" text-center pt-5 pb-20">
            <h1 className=" text-2xl font-bold pb-2 ">Office Timing</h1>
            <p className=" line "></p>
            <p className=" text-base font-medium text-gray-300 py-4 ">
              Monday-Satday: 09.00am to 15.00pm <br />
              Sunday Holiday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
