import React from "react";
import line from "../../../Assets/icons/testimonialline.png";
import clientimg from "../../../Assets/images/lawyer3.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className=" ">
      <div className=" grid grid-cols-2 ">
        <div className=" testimonialBg text-white">
          <div className=" flex justify-center items-center gap-5 py-10 ">
            <div className=" top-0 border-2 border-white p-4  rounded-full">
              <FormatQuoteIcon className=" " fontSize="large" />
            </div>
            <div>
              <h2 className=" text-2xl font-bold">What Our Clients Say</h2>
              <img className=" py-3" src={line} alt="line" />
              <div>
                <Slider {...settings} className=" text-white w-96 ">
                  <div>
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
                  <div>
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
                  <div>
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
                  <div>
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

        <div className="clientbg">
          <div className=" flex justify-center items-center  flex-col">
            <h2 className=" text-2xl font-bold">What Our Clients Say</h2>
            <img className=" py-3" src={line} alt="line" />
          </div>
          <div>
            <h3>Fight For Justice</h3>
            <p>
              Seeking justice in the world is a sed significant emotional and
              investment when we follow this call, we’re deeply.
            </p>
          </div>
          <div>
            <h3>Best Case Stratergy</h3>
            <p>
              Proving liability in plaintiffs’ personal injury and complex civil
              litigation can be challenging and requires relent.
            </p>
          </div>
          <div>
            <h3>Experienced Attorneys</h3>
            <p>
              Lawyer Justice offers a broad range of opportunities for Speak
              Experienced attorneys to work you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
