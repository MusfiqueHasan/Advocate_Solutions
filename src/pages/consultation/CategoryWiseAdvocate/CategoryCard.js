import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lawer from "../../../assets/images/lawyer1.jpg";
import { collection, getDocs } from "firebase/firestore";

import { Link } from "react-router-dom";
import { db } from "../../../Firebase/Firebase-config";
const CategoryCard = (param) => {
  const navigate = useNavigate();
  console.log(
    param?.param, "param"
  );

  const [category, setCategory] = useState([]);
  const [advocate, setAdvocate] = useState([]);
  console.log(category);

  const categorysCollectionRef = collection(db, "categorys");

  useEffect(() => {

    const getcategory = async () => {

      const data = await getDocs(categorysCollectionRef);

      console.log(data, "data");
      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getcategory();
  }, []);

  const found = category.find(obj => {
    return obj.id === param?.param;
  });
  console.log(found, "found");
  return (
    <div>
      <div
        className=" flex bg-base-100 shadow-xl h-40 rounded-md mx-[5rem] mb-[1.5rem] cursor-pointer "
        onClick={() => navigate("/consultation/details")}
      >
        <figure className="w-[15rem] p-3">
          <img src={found?.img} alt="Movie" className="h-full rounded-md" />
        </figure>
        <div className=" h-full flex items-center w-[80rem]">
          <div className="grid grid-cols-3 w-full">
            <div className="w-[100%]">
              <p className="text-lg font-sans font-bold">
                Advocate Faysal Rana
              </p>
              <p className="text-sm font-sans text-gray-400 mt-3">
                Specialities
              </p>
              <p className="text-sm font-sans text-gray-800">Criminal Lawer</p>
            </div>
            <div className="w-[100%]">
              <p className="text-sm font-sans text-gray-400 ">Working in</p>
              <p className="text-sm font-sans font-bold">
                Upozila Judge Court, Faridgang, Chandpur
              </p>
              <div className="flex">
                <div className="mr-[3rem]">
                  <p className="text-sm font-sans text-gray-400 mt-5">
                    Total Experience
                  </p>
                  <p className="text-sm font-sans text-gray-800  font-bold">
                    3+ years
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 flex items-center justify-between px-[3rem] h-full">
              <div className="flex flex-col">
                <p className="text-3xl font-bold font-sans text-orange-600">
                  ট 210 <span className="text-xs text-black">(incl. VAT)</span>
                </p>
                <p className="font-sans">Per consultation</p>
              </div>
              {/* <HiOutlineArrowNarrowRight /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
