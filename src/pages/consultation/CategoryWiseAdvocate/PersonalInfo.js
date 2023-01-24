import React from 'react';

const PersonalInfo = (params) => {
  // console.log(params.findAdv, "paramsfindAdv");
  const advocate = params?.findAdv;
  return (

    <div className="lg:w-[100%]">

      <div className="flex lg:w-[100%] mb-5">
        <p className=" w-[40%]">Full Name</p>
        <p className=" font-bold">{advocate?.name}</p>
      </div>
      <div className="flex lg:w-[100%] mb-5">
        <p className=" w-[40%]">Email</p>
        <p className=" font-bold"> {advocate?.email}</p>
      </div>
      <div className="flex lg:w-[100%] mb-5">
        <p className=" w-[40%]">Practicing Court</p>
        <p className=" font-bold"> {advocate?.court}</p>
      </div>
      <div className="flex lg:w-[100%]] mb-5">
        <p className=" lg:w-[40%] md:w-[35%]">
          Year Of Experience
        </p>
        <p className=" font-bold w-[45%]">
          {advocate?.experience} Years.
        </p>
      </div>
      <div className="flex lg:w-[100%] mb-5">
        <p className=" w-[40%]">Country</p>
        <p className=" font-bold"> Bangladesh</p>
      </div>
      <div className="flex lg:w-[100%] mb-5">
        <p className=" w-[40%]">Bar Code</p>
        <p className=" font-bold"> {advocate?.bar_code}</p>
      </div>
    </div>

  );
};

export default PersonalInfo;