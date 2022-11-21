import React from "react";
import Blogs from "../Blogs/Blogs";
import News from "../news/News";
import Attorneys from "./attorneys/Attorneys";
import TotalCounting from "./counter/TotalCounting";
import HeaderCarousel from "./slider/HeaderCarousel";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <HeaderCarousel />
      {/* <div className="animate__animated animate__fadeInUp"></div>
      <div clas> </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div> */}

      <Attorneys />
      <TotalCounting />
      <Blogs />
      <Testimonial />
      <News />
    </div>
  );
};

export default Home;
