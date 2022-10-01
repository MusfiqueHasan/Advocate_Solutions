import React from "react";
import "./News.css";
import titlelineimg from "../../Assets/icons/title-line-image-2.png";
import blogimg from "../../Assets/images/blog-image-1.jpg";
import blogimg2 from "../../Assets/images/blog-image-2.jpg";
import blogimg3 from "../../Assets/images/blog-image-3.jpg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteIcon from "@mui/icons-material/Favorite";

const News = () => {
  return (
    <div>
      <div className="news_title flex flex-col justify-center items-center gap-y-3 ">
        <h1 className=" text-3xl font-bold text-center mt-5 ">
          Our Latest News
        </h1>
        <img src={titlelineimg} alt="title-line-img" />
      </div>
      <div className=" grid grid-cols-3 gap-7  px-40 py-5">
        <div className=" shadow-md relative bg-slate-50 text-slate-500 ">
          <div className=" bgshadow">
            <img className=" w-full " src={blogimg} alt="blogimage" />
          </div>

          <div className="  p-5 relative">
            <div className=" bg-blue-900 hover:bg-gold transition duration-700 p-3 -mt-16 z-50 w-16">
              <p className=" text-center text-white font-bold text-lg">
                20 <br /> Jul
              </p>
            </div>
            <div className=" flex justify-start items-center mt-6 gap-2 ">
              <LocalOfferIcon fontSize="small" />
              <h3 className=" text-sm ">
                {" "}
                <span className=" text-base font-bold">Tags: </span> Criminal
                Law , Kidnapping
              </h3>
            </div>
            <h1 className=" text-xl text-gray-800 py-3  hover:text-gold">
              We won against criminal !
            </h1>
            <p className=" text-slate-400 text-justify">
              In this, Kidnapping the unlawful taking away or transportation of
              person against that person's will, usually to hold the person
              unlawfully........
            </p>
            <button className=" text-gray-700 font-semibold hover:text-gold text-sm py-5">
              READ MORE
            </button>
          </div>
          <p style={{ border: "1px solid #e1e1e1", width: "100%" }}></p>

          <div className=" flex justify-around items-center text-xs px-5  my-3">
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300">
              <AccountCircleIcon />
              admin
            </button>
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300 whitespace-nowrap">
              <SmsIcon />2 comments
            </button>
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300  whitespace-nowrap">
              <FavoriteIcon />
              12 Likes
            </button>
          </div>
        </div>
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
            <div className=" flex justify-start items-center mt-6 gap-2 ">
              <LocalOfferIcon fontSize="small" />
              <h3 className=" text-sm ">
                {" "}
                <span className=" text-base font-bold">Tags: </span> Adultery,
                Family Law
              </h3>
            </div>
            <h1 className=" text-xl text-gray-800 py-3  hover:text-gold">
              Legal issues regarding paternity !
            </h1>
            <p className=" text-slate-400 text-justify">
              Adultery is extramarital sex that is considered objectionable on
              social, religious, moral or legal grounds though what sexual
              activities.........
            </p>
            <button className=" text-gray-700 font-semibold hover:text-gold text-sm py-5">
              READ MORE
            </button>
          </div>
          <p style={{ border: "1px solid #e1e1e1", width: "100%" }}></p>

          <div className=" flex justify-around items-center text-xs px-5  my-3">
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300">
              <AccountCircleIcon />
              admin
            </button>
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300 whitespace-nowrap">
              <SmsIcon />2 comments
            </button>
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
                5 <br /> Sep
              </p>
            </div>
            <div className=" flex justify-start items-center mt-6 gap-2 ">
              <LocalOfferIcon fontSize="small" />
              <h3 className=" text-sm ">
                {" "}
                <span className=" text-base font-bold">Tags: </span> Consumer
                Law, Privacy
              </h3>
            </div>
            <h1 className=" text-xl text-gray-800 py-3  hover:text-gold">
              Judgement, Unfair business !
            </h1>
            <p className=" text-slate-400 text-justify">
              Consumer prottection law or consumeer law is considered an area of
              law that regulates private law relationships between
              individual.........
            </p>
            <button className=" text-gray-700 font-semibold hover:text-gold text-sm py-5">
              READ MORE
            </button>
          </div>
          <p style={{ border: "1px solid #e1e1e1", width: "100%" }}></p>

          <div className=" flex justify-around items-center text-xs px-5  my-3">
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300">
              <AccountCircleIcon />
              admin
            </button>
            <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300 whitespace-nowrap">
              <SmsIcon />2 comments
            </button>
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

export default News;
