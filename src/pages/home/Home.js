import React from "react";
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
      <Footer />
    </>
  );
};

export default Home;
