import React from "react";
import Blogs from "../Blogs/Blogs";
import News from "../news/News";
import Attorneys from "./attorneys/Attorneys";
import TotalCounting from "./counter/TotalCounting";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import HeaderCarousel from "./slider/HeaderCarousel";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderCarousel />
      <Attorneys />
      <TotalCounting />
      <Blogs />
      <Testimonial />
      <News />
      <Footer />
    </>
  );
};

export default Home;
