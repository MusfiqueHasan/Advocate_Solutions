import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import CategorySearch from "./CategorySearch";
import lawer from "../../../assets/images/lawyer1.jpg";
import { collection, getDocs } from "firebase/firestore";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { db } from "../../../Firebase/Firebase-config";
const CategoryWiseAdvocate = () => {
  const params = useParams();

  const navigate = useNavigate();


  const [category, setCategory] = useState([]);
  const [exp, setExp] = useState();
  const [filter, setFilter] = useState(false);


  const categorysCollectionRef = collection(db, "categorys");

  useEffect(() => {

    const getcategory = async () => {

      const data = await getDocs(categorysCollectionRef);

      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getcategory();
  }, []);
  let found = category.find(obj => {
    return obj.id === params?.catId;
  });
  let filterdata = {}
  if (filter === true) {
    filterdata = found?.all_advocates?.find(obj => {
      console.log(obj.experience, "obj.experience");
      console.log(exp, "exp");
      return obj.experience == exp;
    });
  }
  console.log(filterdata, "filterdata");
  console.log(found, "found");
  const handleChange = (event) => {
    setExp(event.target.value)
  }
  return (
    <div className=" mt-16 grid grid-cols-1 md:grid-cols-4">
      <div className=" px-3" >
        <div className="md:ml-10 ">
          <div className="flex justify-between mb-5">
            <p className=" uppercase font-bold text-xl">Advance Search</p>
            <button className="bg-blue-600 px-4 py-2 rounded-md shadow-md">
              <HiOutlineBars3BottomLeft className="text-2xl text-white cursor-pointer" />
            </button>
          </div>

          <div className="mt-3">
            <p className="font-bold mb-3">Filter By Experience</p>
            <div className="flex justify-between">
              <input
                className=' text-lg p-3 border-2 border-sky-500 w-full rounded-lg'
                type="number"
                min={0}

                placeholder="Experience Number"
                onChange={handleChange}
              />

            </div>

            <div className=' flex justify-around items-center py-4'>
              <button onClick={(e) => { setFilter(true) }} className=' bg-green-500 font-bold py-2 px-5 text-center rounded-xl text-white ' >Filter</button>
              <button onClick={(e) => { setFilter(false) }} className=' bg-red-500 font-bold py-2 px-5 text-center rounded-xl text-white ' >Clear Filter</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:col-span-3">
        {found?.all_advocates ? <div>
          {filter === true ? <div>
            {filterdata ? <div

              className=" flex bg-base-100 shadow-xl h-40 rounded-md md:mx-[5rem] mb-[1.5rem] cursor-pointer "
              onClick={() => navigate(`/consultation/details/${found?.id}/${filterdata?.name}`
              )}
            >

              <figure className="w-[15rem] p-3">
                <img src={filterdata?.img} alt="advocate_img" className="h-full rounded-md" />
              </figure>
              <div className=" h-full flex items-center w-[80rem]">
                <div className="grid grid-cols-3 w-full">
                  <div className="w-[100%]">
                    <p className="text-lg font-sans font-bold">
                      {filterdata?.name}
                    </p>
                    <p className="text-sm font-sans text-gray-400 mt-3">
                      Specialities
                    </p>
                    <p className="text-sm font-sans text-gray-800">{found?.name}</p>
                  </div>
                  <div className="w-[100%]">
                    <p className="text-sm font-sans text-gray-400 ">Working in</p>
                    <p className="text-sm font-sans font-bold">
                      {filterdata?.court}
                    </p>
                    <div className="flex">
                      <div className="mr-[3rem]">
                        <p className="text-sm font-sans text-gray-400 mt-5">
                          Total Experience
                        </p>
                        <p className="text-sm font-sans text-gray-800  font-bold">
                          {filterdata?.experience} Years
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 flex items-center justify-between px-[3rem] h-full">
                    <div className="flex flex-col">
                      <p className="text-lg md:text-3xl font-bold font-sans text-orange-600">
                        ট {filterdata?.fees} <span className="text-xs text-black">(incl. VAT)</span>
                      </p>
                      <p className="font-sans">Per consultation</p>
                    </div>
                    {/* <HiOutlineArrowNarrowRight /> */}
                  </div>
                </div>
              </div>


            </div> : <div className=" grid place-items-center py-32">
              <h1 className="font-bold text-base md:text-3xl text-red-600">
                Sorry!     No Advocates Found.
              </h1>
            </div>}
          </div> : <div>
            {found?.all_advocates?.map((elem, index) => (
              <div
                key={elem?.index}
                className=" flex bg-base-100 shadow-xl h-40 rounded-md md:mx-[5rem] mb-[1.5rem] cursor-pointer "
                onClick={() => navigate(`/consultation/details/${found?.id}/${elem?.name}`
                )}
              >

                <figure className="w-[15rem] p-3">
                  <img src={elem?.img} alt="advocate_img" className="h-full rounded-md" />
                </figure>
                <div className=" h-full flex items-center w-[80rem]">
                  <div className="grid grid-cols-3 w-full">
                    <div className="w-[100%]">
                      <p className="text-lg font-sans font-bold">
                        {elem?.name}
                      </p>
                      <p className="text-sm font-sans text-gray-400 mt-3">
                        Specialities
                      </p>
                      <p className="text-sm font-sans text-gray-800">{found?.name}</p>
                    </div>
                    <div className="w-[100%]">
                      <p className="text-sm font-sans text-gray-400 ">Working in</p>
                      <p className="text-sm font-sans font-bold">
                        {elem?.court}
                      </p>
                      <div className="flex">
                        <div className="mr-[3rem]">
                          <p className="text-sm font-sans text-gray-400 mt-5">
                            Total Experience
                          </p>
                          <p className="text-sm font-sans text-gray-800  font-bold">
                            {elem?.experience} Years
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-100 flex items-center justify-between px-[3rem] h-full">
                      <div className="flex flex-col">
                        <p className="text-lg md:text-3xl font-bold font-sans text-orange-600">
                          ট {elem?.fees} <span className="text-xs text-black">(incl. VAT)</span>
                        </p>
                        <p className="font-sans">Per consultation</p>
                      </div>
                      {/* <HiOutlineArrowNarrowRight /> */}
                    </div>
                  </div>
                </div>


              </div>
            ))}
          </div>}

        </div> : <>
          <div className=" grid place-items-center py-32">
            <h1 className="font-bold text-base md:text-3xl text-red-600">
              Sorry!     No Advocates Found.
            </h1>
          </div>

        </>
        }



      </div >
    </div >
  );
};

export default CategoryWiseAdvocate;
