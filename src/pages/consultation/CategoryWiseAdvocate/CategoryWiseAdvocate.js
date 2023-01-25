import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import CategorySearch from "./CategorySearch";
import lawer from "../../../assets/images/lawyer1.jpg";
import { collection, getDocs } from "firebase/firestore";

import { Link } from "react-router-dom";
import { db } from "../../../Firebase/Firebase-config";
const CategoryWiseAdvocate = () => {
  const params = useParams();

  const navigate = useNavigate();


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

  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs={3} sx={{ position: "relative" }}>
        <CategorySearch />
      </Grid>
      <Grid item xs={9} sx={{ p: 5 }}>
        {found?.all_advocates ? <div>
          {found?.all_advocates?.map((elem, index) => (
            <div
              key={elem?.index}
              className=" flex bg-base-100 shadow-xl h-40 rounded-md mx-[5rem] mb-[1.5rem] cursor-pointer "
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
                          {elem?.experience}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 flex items-center justify-between px-[3rem] h-full">
                    <div className="flex flex-col">
                      <p className="text-3xl font-bold font-sans text-orange-600">
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
        </div> : <>
          <div className=" grid place-items-center py-32">
            <h1 className="font-bold text-base md:text-3xl text-red-600">
              Sorry!     No Advocates Found.
            </h1>
          </div>

        </>
        }



      </Grid >
    </Grid >
  );
};

export default CategoryWiseAdvocate;
