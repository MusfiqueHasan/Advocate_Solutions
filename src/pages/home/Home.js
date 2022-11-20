import React from "react";
import News from "../news/News";
import Attorneys from "./attorneys/Attorneys";
import TotalCounting from "./counter/TotalCounting";
import HeaderCarousel from "./slider/HeaderCarousel";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HeaderCarousel />
      <Attorneys />
      <TotalCounting />
      <Testimonial />
      <News />
    </>
  );
};

export default Home;
