import React from "react";
import News from "../news/News";
import Attorneys from "./attorneys/Attorneys";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Attorneys />
      <Testimonial />
      <News />
      <Footer />
    </>
  );
};

export default Home;
