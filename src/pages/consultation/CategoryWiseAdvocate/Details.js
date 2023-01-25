import { AiOutlineLock, AiFillMinusCircle } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import img from "../../../assets/images/lawyer1.jpg";
import PersonalInfo from "./PersonalInfo";
import Documents from "./Documents";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../../services/ui/Form";
import AppSubNav from "../../../services/ui/AppSubNav";
import AppointmentForm from "./AppointmentForm";
import { collection, getDocs } from "firebase/firestore";

import { Link } from "react-router-dom";
import { db } from "../../../Firebase/Firebase-config";
const Details = () => {
  const params = useParams();
  const navigate = useNavigate();


  const [selectedNav, setSelectedNav] = useState();
  const [category, setCategory] = useState([]);
  const [advocate, setAdvocate] = useState([]);


  const categorysCollectionRef = collection(db, "categorys");

  useEffect(() => {

    const getcategory = async () => {

      const data = await getDocs(categorysCollectionRef);



      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));



    };

    getcategory();
  }, []);

  const found = category.find(obj => {
    return obj.id === params?.catId;
  });
  const findAdv = found?.all_advocates?.find(obj => {
    return obj.name === params?.advName;
  });


  const handleSelectedSubNav = (item) => {

    const data = item.find((el) => el.checked);
    if (data) {
      setSelectedNav({ ...data });
    }
  };

  return (
    <div className="my-20">
      <div className="grid grid-cols-3 gap-4 mx-5">
        <div className=" col-span-2">
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
              <PersonalInfo findAdv={findAdv} />
            ) : selectedNav?.key === "Documents" ? (
              <Documents />
            ) : (
              <AppointmentForm findAdv={findAdv} />
            )}
          </Form>
        </div>

        <div className="">
          <div className=" h-full border-2" >
            <div className="flex flex-col items-center justify-center">
              <div className=" lg:w-[20rem] lg:h-[15rem] flex justify-center">
                <img
                  src={findAdv?.img}
                  alt=""
                  className=" w-[100%] h-[100%] rounded-md"
                />
              </div>
              <p className=" font-bold text-2xl mt-14 mb-1">{findAdv?.name}</p>
              <p className="">     {findAdv?.email}</p>
              <p className="text-sm font-sans text-gray-800">
                {findAdv?.court}
              </p>


            </div>
          </div>
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
