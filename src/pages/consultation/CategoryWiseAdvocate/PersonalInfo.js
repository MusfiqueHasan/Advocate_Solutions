import React from 'react';

const PersonalInfo = () => {
  return (
    
      <div className="lg:w-[100%]">
        <div className="flex lg:w-[100%] mb-5">
          <p className=" w-[40%]">First Name</p>
          <p className=" font-bold">Daniel</p>
        </div>
        <div className="flex lg:w-[100%] mb-5">
          <p className=" w-[40%]">Last Name</p>
          <p className=" font-bold">Schudel</p>
        </div>
        <div className="flex lg:w-[100%] mb-5">
          <p className=" w-[40%]">Email</p>
          <p className=" font-bold"> Daniel@gmail.com</p>
        </div>
        <div className="flex lg:w-[100%] mb-5">
          <p className=" w-[40%]">Date of Birth</p>
          <p className=" font-bold"> Daniel@gmail.com</p>
        </div>
        <div className="flex lg:w-[100%]] mb-5">
          <p className=" lg:w-[40%] md:w-[35%]">
            Residential Address
          </p>
          <p className=" font-bold w-[45%]">
            Samaklay 1739, Central, Fernando de la Mora
          </p>
        </div>
        <div className="flex lg:w-[100%] mb-5">
          <p className=" w-[40%]">Country</p>
          <p className=" font-bold"> Paraguay</p>
        </div>
        <div className="flex lg:w-[100%] mb-5">
          <p className=" w-[40%]">Postal Code</p>
          <p className=" font-bold"> 001003</p>
        </div>
      </div>
   
  );
};

export default PersonalInfo;