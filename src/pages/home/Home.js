import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import Blogs from "../Blogs/Blogs";
import News from "../news/News";
import Attorneys from "./attorneys/Attorneys";
import TotalCounting from "./counter/TotalCounting";
import HeaderCarousel from "./slider/HeaderCarousel";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  const { currentUser } = useSelector((state) => state.authentication);
  const tawkMessengerRef = useRef();

  const onChatMaximized = useCallback(() => {
    tawkMessengerRef.current.setAttributes(
      {
        id: currentUser?.uid,
      },
      function (error) {
        console.log(error);
      }
    );
    tawkMessengerRef.current.setAttributes(
      {
        name: currentUser?.displayName,
        email: currentUser?.email,
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
      <Attorneys />
      <TotalCounting />
      <Blogs />
      <Testimonial />
      <News />
      {currentUser?.email && (
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
