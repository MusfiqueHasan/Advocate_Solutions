import React, { useState, useEffect } from "react";
import "./News.css";
import titlelineimg from "../../assets/icons/title-line-image-2.png";
import blogimg from "../../assets/images/blog-image-1.jpg";
import blogimg2 from "../../assets/images/blog-image-2.jpg";
import blogimg3 from "../../assets/images/blog-image-3.jpg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase-config";
import { Link } from 'react-router-dom';
const News = () => {
  const [newses, setNews] = useState([]);

  const newsesCollectionRef = collection(db, "news");

  useEffect(() => {

    const getnewses = async () => {

      const data = await getDocs(newsesCollectionRef);
      setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getnewses();
  }, []);
  return (
    <div className="mt-12">
      <div className="news_title flex flex-col justify-center items-center gap-y-3 ">
        <h1 className=" text-3xl font-bold text-center mt-5 ">
          Our Latest News
        </h1>
        <img src={titlelineimg} alt="title-line-img" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-7 px-5 md:px-40 py-5">
        {newses?.slice(0, 3).map((news) => (
          <div key={news?.id} className=" shadow-md relative bg-slate-50 text-slate-500 ">
            <div className="bgshadow  h-[200px]">
              <img src={news?.image} alt="" className=" w-full h-full" />
            </div>

            <div className="  p-5 relative">
              <div className=" bg-blue-900 hover:bg-gold transition duration-700 p-3 -mt-16 z-50 w-16">
                <p className=" text-center text-white font-bold text-lg">
                  {news?.date?.slice(0, 2)} <br />  {news?.date?.slice(2)}
                </p>
              </div>
              <div className=" flex justify-start items-center mt-6 gap-2 ">
                <LocalOfferIcon fontSize="small" />
                <h3 className=" text-sm ">
                  {" "}
                  <span className=" text-base font-bold">Tags: </span> {news?.tags ? <>{news?.tags}</> : "none"}
                </h3>
              </div>
              <h1 className=" text-xl text-gray-800 py-3  hover:text-gold">
                {news?.title}
              </h1>
              <p className=" text-slate-400 text-justify">
                {news?.description?.slice(0, 120)} ........
              </p>
              <button className=" text-gray-700 font-semibold hover:text-gold text-sm py-5">
                READ MORE
              </button>
            </div>
            <p style={{ border: "1px solid #e1e1e1", width: "100%" }}></p>

            <div className=" flex justify-around items-center text-xs px-5  my-3">
              <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300">
                <AccountCircleIcon />
                {news?.author}
              </button>
              <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300 whitespace-nowrap">
                <SmsIcon />
                {news?.comment ? <>{news?.comment}</> : 0}
                comments
              </button>
              <button className=" flex justify-around items-center gap-2 text-gray-500 hover:text-gold transition duration-300  whitespace-nowrap">
                <FavoriteIcon />
                {news?.react ? <>{news?.react}</> : 0}
                Likes
              </button>
            </div>
          </div>))}

      </div>
    </div>
  );
};

export default News;
