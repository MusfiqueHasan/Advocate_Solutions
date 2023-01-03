import React from "react";
import line from "../../../Assets/icons/testimonialline.png";
import clientimg from "../../../Assets/images/lawyer3.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BalanceIcon from "@mui/icons-material/Balance";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className=" my-10">
      <div className=" grid grid-cols-2 relative ">
        <div className=" testimonialBg text-white">
          <div className=" flex justify-center items-center gap-5 py-10 ">
            <div className=" top-0 border-2 border-white p-4  rounded-full">
              <FormatQuoteIcon className=" " fontSize="large" />
            </div>
            <div>
              <h2 className=" text-2xl font-bold font-mono">
                What Our Clients Say
              </h2>
              <img className=" py-3" src={line} alt="line" />
              <div>
                <Slider {...settings} className="  text-white w-96 ">
                  <div className="px-2">
                    <h3 className=" py-5 text-justify">
                      How to pursue pleasure rationally consequences that are
                      extremeely painful or again is there anyones who loves or
                      pursues or desires to obtain pain of itself because its
                      sed great ...{" "}
                    </h3>
                    <p className=" border-2 border-white rounded-xl w-28 my-5"></p>
                    <div className=" flex justify-start items-center gap-5">
                      <img className=" w-14 h-14" src={clientimg} alt="" />
                      <div>
                        <h3 className=" text-lg font-bold"> Alex Carolina</h3>
                        <p className=" text-sm font-medium italic">
                          CEO of RJX Solution
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className=" py-5 text-justify">
                      How to pursue pleasure rationally consequences that are
                      extremeely painful or again is there anyones who loves or
                      pursues or desires to obtain pain of itself because its
                      sed great ...{" "}
                    </h3>
                    <p className=" border-2 border-white rounded-xl w-28 my-5"></p>
                    <div className=" flex justify-start items-center gap-5">
                      <img className=" w-14 h-14" src={clientimg} alt="" />
                      <div>
                        <h3 className=" text-lg font-bold"> Alex Carolina</h3>
                        <p className=" text-sm font-medium italic">
                          CEO of RJX Solution
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className=" py-5 text-justify">
                      How to pursue pleasure rationally consequences that are
                      extremeely painful or again is there anyones who loves or
                      pursues or desires to obtain pain of itself because its
                      sed great ...{" "}
                    </h3>
                    <p className=" border-2 border-white rounded-xl w-28 my-5"></p>
                    <div className=" flex justify-start items-center gap-5">
                      <img className=" w-14 h-14" src={clientimg} alt="" />
                      <div>
                        <h3 className=" text-lg font-bold"> Alex Carolina</h3>
                        <p className=" text-sm font-medium italic">
                          CEO of RJX Solution
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className=" py-5 text-justify">
                      How to pursue pleasure rationally consequences that are
                      extremeely painful or again is there anyones who loves or
                      pursues or desires to obtain pain of itself because its
                      sed great ...{" "}
                    </h3>
                    <p className=" border-2 border-white rounded-xl w-28 my-5"></p>
                    <div className=" flex justify-start items-center gap-5">
                      <img className=" w-14 h-14" src={clientimg} alt="" />
                      <div>
                        <h3 className=" text-lg font-bold"> Alex Carolina</h3>
                        <p className=" text-sm font-medium italic">
                          CEO of RJX Solution
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="centerTestimonial pt-8 ">
          <div className=" flex flex-col justify-center items-center gap-y-16">
            <div className=" top-0  text-white hover:text-gold bg-gold hover:bg-white hover:border-2 border-gold transition duration-500 ease-in-out  p-4  rounded-full">
              <BalanceIcon className=" " fontSize="large" />
            </div>
            <div className=" top-0  text-white hover:text-gold bg-gold hover:bg-white hover:border-2 border-gold transition duration-500 ease-in-out  p-4  rounded-full">
              <BusinessCenterIcon className=" " fontSize="large" />
            </div>
            <div className=" top-0  text-white hover:text-gold bg-gold hover:bg-white hover:border-2 border-gold transition duration-500 ease-in-out  p-4  rounded-full">
              <PersonIcon className=" " fontSize="large" />
            </div>
          </div>
        </div>
        <div className="clientbg pl-20">
          <div className=" flex justify-start items-start pt-10   flex-col">
            <h2 className=" text-2xl font-bold font-mono">
              What Our Clients Say
            </h2>
            <img className=" py-3" src={line} alt="line" />
          </div>
          <div className="  py-3 ">
            <h3 className=" text-xl font-semibold font-mono">
              Fight For Justice
            </h3>
            <p className="py-3 text-gray-400 text-lg">
              Seeking justice in the world is a sed significant emotional <br />{" "}
              and investment when we follow this call, we're deeply.
            </p>
          </div>
          <div className="  py-3 ">
            <h3 className=" text-xl font-semibold font-mono">
              Best Case Stratergy
            </h3>
            <p className="py-3 text-gray-400 text-lg">
              Proving liability in plaintiffs' personal injury and complex civil{" "}
              <br />
              litigation can be challenging and requires relent.
            </p>
          </div>
          <div className="  py-3 ">
            <h3 className=" text-xl font-semibold font-mono">
              Experienced Attorneys
            </h3>
            <p className="py-3 text-gray-400 text-lg">
              Lawyer Justice offers a broad range of opportunities for Speak{" "}
              <br />
              Experienced attorneys to work you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
