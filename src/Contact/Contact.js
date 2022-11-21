import React from "react";
import ContactUs from "../Animations/ContactUs";

const Contact = () => {
  return (
    <div className=" mt-16">
      <div>
        <div className=" py-7">
          <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
            Contact Us
          </h1>
        </div>
        <div className=" grid grid-cols-3">
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div className=" col-span-2">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
