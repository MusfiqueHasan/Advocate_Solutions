import React from "react";
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
const Attorneys = () => {
  return (
    <div>
      <div className=" ">
        <div className="attorney_title flex flex-col justify-center items-center gap-y-3 ">
          <h1 className=" text-3xl font-bold text-center mt-5 ">
            Meet Our Attorneys
          </h1>
          <img src={titlelineimg} alt="title-line-img" />
        </div>
      </div>

      <div className=" grid grid-cols-4 gap-7  px-36 py-5">
        <div className=" shadow-md p-3">
          <img src={lawyer1} alt="" />
          <h1 className=" text-xl font-bold">David Vigo Michel</h1>
          <p className=" text-lg text-gold">Family Lawyer</p>
          <div className=" border-b-2 mr-7 my-5"></div>
          <div className=" flex justify-start items-center gap-x-5 my-2">
            <button className=" text-gold">
              <LocalPhoneIcon />
            </button>
            <p className=" text-gray-400">98765-12-345</p>
          </div>
          <div className=" flex justify-start items-center gap-x-5">
            <button className=" text-gold">
              <MailOutlineIcon />
            </button>
            <p className=" text-gray-400">Davidvigo@domain.com</p>
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
        <div className=" shadow-md p-3">
          <img src={lawyer2} alt="" />
          <h1 className=" text-xl font-bold">David Vigo Michel</h1>
          <p className=" text-lg text-gold">Family Lawyer</p>
          <div className=" border-b-2 mr-7 my-5"></div>
          <div className=" flex justify-start items-center gap-x-5 my-2">
            <button className=" text-gold">
              <LocalPhoneIcon />
            </button>
            <p className=" text-gray-400">98765-12-345</p>
          </div>
          <div className=" flex justify-start items-center gap-x-5">
            <button className=" text-gold">
              <MailOutlineIcon />
            </button>
            <p className=" text-gray-400">Davidvigo@domain.com</p>
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
        <div className=" shadow-md p-3">
          <img src={lawyer3} alt="" />
          <h1 className=" text-xl font-bold">David Vigo Michel</h1>
          <p className=" text-lg text-gold">Family Lawyer</p>
          <div className=" border-b-2 mr-7 my-5"></div>
          <div className=" flex justify-start items-center gap-x-5 my-2">
            <button className=" text-gold">
              <LocalPhoneIcon />
            </button>
            <p className=" text-gray-400">98765-12-345</p>
          </div>
          <div className=" flex justify-start items-center gap-x-5">
            <button className=" text-gold">
              <MailOutlineIcon />
            </button>
            <p className=" text-gray-400">Davidvigo@domain.com</p>
          </div>

          <div className=" flex justify-start gap-x-5 items-center my-3">
            <button className=" border shadow-sm p-2 text-gray-500 hover:bg-gold hover:text-white transition duration-300 rounded-md">
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
        <div className=" shadow-md p-3">
          <img src={lawyer4} alt="" />
          <h1 className=" text-xl font-bold">David Vigo Michel</h1>
          <p className=" text-lg text-gold">Family Lawyer</p>
          <div className=" border-b-2 mr-7 my-5"></div>
          <div className=" flex justify-start items-center gap-x-5 my-2">
            <button className=" text-gold">
              <LocalPhoneIcon />
            </button>
            <p className=" text-gray-400">98765-12-345</p>
          </div>
          <div className=" flex justify-start items-center gap-x-5">
            <button className=" text-gold">
              <MailOutlineIcon />
            </button>
            <p className=" text-gray-400">Davidvigo@domain.com</p>
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
      </div>
    </div>
  );
};

export default Attorneys;
