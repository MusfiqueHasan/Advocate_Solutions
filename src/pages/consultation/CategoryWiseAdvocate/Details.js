import { AiOutlineLock, AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";
import img from "../../../Assets/images/lawyer1.jpg";
import PersonalInfo from "./PersonalInfo";
import Documents from "./Documents";
import { useNavigate } from "react-router-dom";
import Form from "../../../services/ui/Form";
import AppSubNav from "../../../services/ui/AppSubNav";
import AppointmentForm from "./AppointmentForm";

const Details = () => {
  const [selectedNav, setSelectedNav] = useState();
  const navigate = useNavigate();

  const handleSelectedSubNav = (item) => {
    console.log(item);
    const data = item.find((el) => el.checked);
    if (data) {
      setSelectedNav({ ...data });
    }
  };

  return (
    <div className="my-20">
      <div className="grid grid-cols-3 gap-4 mx-5">
        <div className="h-[34rem] col-span-2">
          <Form className=" h-full" width="!w-[100%]">
            <div>
              <AppSubNav
                navbarData={[
                  "Personal Information",
                  "Documents",
                  "Appointments",
                ]}
                callback={(item) => handleSelectedSubNav(item)}
              />
            </div>
            {selectedNav?.key === "PersonalInformation" ? (
              <PersonalInfo />
            ) : selectedNav?.key === "Documents" ? (
              <Documents />
            ) : (
             <AppointmentForm/>
            )}
          </Form>
        </div>

        <div className="h-[34rem]">
          <Form title="" className=" h-full" width="!w-full">
            <div className="flex flex-col items-center justify-center">
              <div className=" lg:w-[20rem] lg:h-[15rem] flex justify-center">
                <img
                  src={img}
                  alt=""
                  className=" w-[100%] h-[100%] rounded-md"
                />
              </div>
              <p className=" font-bold text-2xl mt-14 mb-1">Dr. Faysal Rana</p>
              <p className="">MBBS</p>
              <p className="text-sm font-sans text-gray-800">
                Genaral Physician, Pediatrics, Covid Unit
              </p>
              <p className="text-sm font-sans text-gray-800">
                Upozila Health Complex, Faridgang, Chandpur
              </p>
            </div>
          </Form>
        </div>
      </div>

      {/* <div className=" flex justify-center px-[2rem]">
        <button
          onClick={() => navigate("/telemedicine/doctors/view")}
          className="btn  bg-slate-500	 border-none hover:bg-slate-500 mr-5"
        >
          Back info
        </button>

        <button
          onClick={() => navigate("/telemedicine/doctors/add")}
          className="btn  bg-orange-400 border-none hover:bg-orange-400 mr-5"
        >
          Update info
        </button>
      </div> */}
    </div>
  );
};

export default Details;
