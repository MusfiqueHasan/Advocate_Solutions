import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import News from "../news/News";
import Attorneys from "./attorneys/Attorneys";
import TotalCounting from "./counter/TotalCounting";
import HeaderCarousel from "./slider/HeaderCarousel";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  const { currentUser } = useSelector((state) => state.authentication);
  const location = useLocation().pathname;
  const tawkMessengerRef = useRef();

  const onChatMaximized = useCallback(() => {
    tawkMessengerRef.current.setAttributes(
      {
        id: "hello",
      },
      function (error) {
        console.log(error);
      }
    );
    // const { firstName, lastName } = authUser?.profile || {};
    // const fullName = firstName + ' ' + lastName ? lastName : '';
    tawkMessengerRef.current.setAttributes(
      {
        name: "Musfique",
        email: "musfiquehasan08@gmail.com",
        // hash: uniqueId(),
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

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
      {currentUser?.email &&
        location ===
          "/" &&(
            <TawkMessengerReact
              propertyId="63bcf58dc2f1ac1e202c9bdc"
              widgetId="1gmd1uctb"
              ref={tawkMessengerRef}
              onChatMaximized={onChatMaximized}
            />
          )}
    </div>
  );
};

export default Home;
