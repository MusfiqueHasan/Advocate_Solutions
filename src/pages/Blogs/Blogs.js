import React, { useState, useEffect } from "react";

import titlelineimg from "../../assets/icons/title-line-image-2.png";
import blogimg from "../../assets/images/cybe-defamation.jpg";
import blogimg2 from "../../assets/images/banking-attorneys.jpg";
import blogimg3 from "../../assets/images/legal-questions.jpg";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase-config";

const Blogs = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  const usersCollectionRef = collection(db, "Blogs");

  useEffect(() => {
    console.log("heat 1");
    const getUsers = async () => {
      console.log("heat 2");
      const data = await getDocs(usersCollectionRef);
      console.log("heat 3");
      console.log(data, "data");
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div className=" mt-12">
      <div className="news_title flex flex-col justify-center items-center gap-y-3 ">
        <h1 className=" text-3xl font-bold text-center mt-5 ">
          Advocates Blog
        </h1>
        <img src={titlelineimg} alt="title-line-img" />
      </div>
      <div className=" grid grid-cols-3 gap-7  px-40 py-5">
        <div className=" shadow-md relative bg-slate-50 text-slate-500 ">
          <div className=" bgshadow">
            <img className=" w-full " src={blogimg2} alt="blogimage" />
          </div>

          <div className="  p-5 relative">
            <div className=" bg-blue-900 hover:bg-gold transition duration-700 p-3 -mt-16 z-50 w-16">
              <p className=" text-center text-white font-bold text-lg">
                10 <br /> Aug
              </p>
            </div>
            {/* <div className=" flex justify-start items-center mt-6 gap-2 ">
              <LocalOfferIcon fontSize="small" />
              <h3 className=" text-sm ">
                {" "}
                <span className=" text-base font-bold">Tags: </span> Adultery,
                Family Law
              </h3>
            </div> */}
            <h1 className=" text-xl text-gray-800 py-3  hover:text-gold">
              Cheque Bounce
            </h1>
            <p className=" text-slate-400 text-justify">
              Adultery is extramarital sex that is considered objectionable on
              social, religious, moral or legal grounds though what sexual
              activities Adultery is extramarital sex that is considered
              objectionable on social,.........
            </p>
            <button className=" text-gray-700 font-semibold hover:text-gold text-sm py-5">
              READ MORE
            </button>
          </div>
          <p style={{ border: "1px solid #e1e1e1", width: "100%" }}></p>

          <div className=" flex justify-around items-center text-xs px-5  my-3">
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300">
              <AccountCircleIcon />
              Advocate Shabbir Shiddiky
            </button>
            {/* <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300 whitespace-nowrap">
              <SmsIcon />2 comments
            </button> */}
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300  whitespace-nowrap">
              <FavoriteIcon />
              12 Likes
            </button>
          </div>
        </div>
        <div className=" shadow-md relative bg-slate-50 text-slate-500 ">
          <div className=" bgshadow">
            <img className=" w-full " src={blogimg} alt="blogimage" />
          </div>

          <div className="  p-5 relative">
            <div className=" bg-blue-900 hover:bg-gold transition duration-700 p-3 -mt-16 z-50 w-16">
              <p className=" text-center text-white font-bold text-lg">
                10 <br /> Aug
              </p>
            </div>
            {/* <div className=" flex justify-start items-center mt-6 gap-2 ">
              <LocalOfferIcon fontSize="small" />
              <h3 className=" text-sm ">
                {" "}
                <span className=" text-base font-bold">Tags: </span> Adultery,
                Family Law
              </h3>
            </div> */}
            <h1 className=" text-xl text-gray-800 py-3  hover:text-gold">
              Cyber Defamation
            </h1>
            <p className=" text-slate-400 text-justify">
              Adultery is extramarital sex that is considered objectionable on
              social, religious, moral or legal grounds though what sexual
              activities Adultery is extramarital sex that is considered
              objectionable on social,.........
            </p>
            <button className=" text-gray-700 font-semibold hover:text-gold text-sm py-5">
              READ MORE
            </button>
          </div>
          <p style={{ border: "1px solid #e1e1e1", width: "100%" }}></p>

          <div className=" flex justify-around items-center text-xs px-5  my-3">
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300">
              <AccountCircleIcon />
              Advocate E.h.m. Sharifuzzaman Azad
            </button>
            {/* <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300 whitespace-nowrap">
              <SmsIcon />2 comments
            </button> */}
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300  whitespace-nowrap">
              <FavoriteIcon />
              12 Likes
            </button>
          </div>
        </div>
        <div className=" shadow-md relative bg-slate-50 text-slate-500 ">
          <div className=" bgshadow">
            <img className=" w-full " src={blogimg3} alt="blogimage" />
          </div>

          <div className="  p-5 relative">
            <div className=" bg-blue-900 hover:bg-gold transition duration-700 p-3 -mt-16 z-50 w-16">
              <p className=" text-center text-white font-bold text-lg">
                10 <br /> Aug
              </p>
            </div>
            {/* <div className=" flex justify-start items-center mt-6 gap-2 ">
              <LocalOfferIcon fontSize="small" />
              <h3 className=" text-sm ">
                {" "}
                <span className=" text-base font-bold">Tags: </span> Adultery,
                Family Law
              </h3>
            </div> */}
            <h1 className=" text-xl text-gray-800 py-3  hover:text-gold">
              Legal Questions
            </h1>
            <p className=" text-slate-400 text-justify">
              Adultery is extramarital sex that is considered objectionable on
              social, religious, moral or legal grounds though what sexual
              activities Adultery is extramarital sex that is considered
              objectionable on social,.........
            </p>
            <button className=" text-gray-700 font-semibold hover:text-gold text-sm py-5">
              READ MORE
            </button>
          </div>
          <p style={{ border: "1px solid #e1e1e1", width: "100%" }}></p>

          <div className=" flex justify-around items-center text-xs px-5  my-3">
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300">
              <AccountCircleIcon />
              Advocate Kamrul Hasan (fidel)
            </button>
            {/* <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300 whitespace-nowrap">
              <SmsIcon />2 comments
            </button> */}
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300  whitespace-nowrap">
              <FavoriteIcon />
              12 Likes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
