import { Grid, Paper } from '@mui/material'
import React from 'react'
// import doc1 from "../../../assets/doc1.jpg";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CategoryWiseAdvocate = () => {
  const navigate = useNavigate()
  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs={3}>

      </Grid>
      <Grid item xs={9} sx={{ p: 5 }}>
      <label htmlFor="my-modal-3" className="modal-button">
      <div
        className=" flex bg-base-100 shadow-xl h-40 rounded-md mx-[5rem] mb-[1.5rem] cursor-pointer "
     onClick={()=>navigate("/telemedicine/doctors/view/details")} 
      >
        <figure className="w-[15rem] p-3">
          {/* <img src={doc1} alt="Movie" className="h-full rounded-md" /> */}
        </figure>
        <div className=" h-full flex items-center w-[80rem]">
          <div className="grid grid-cols-3 w-full">
            <div className="w-[100%]">
              <p className="text-lg font-sans font-bold">Dr. Faysal Rana</p>
              <p className="text-sm font-sans">MBBS</p>
              <p className="text-sm font-sans text-gray-400 mt-3">
                Specialities
              </p>
              <p className="text-sm font-sans text-gray-800">
                Genaral Physician, Pediatrics, Covid Unit
              </p>
            </div>
            <div className="w-[100%]">
              <p className="text-sm font-sans text-gray-400 ">Working in</p>
              <p className="text-sm font-sans font-bold">
                Upozila Health Complex, Faridgang, Chandpur
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
                <div>
                  <p className="text-sm font-sans text-gray-400 mt-5">
                    Total Rating (5300)
                  </p>

                  <div className="flex items-center">
                    <div className="rating rating-sm mr-2">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                    <p className="font-bold">4.9</p>
                  </div>
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
    </label>
      </Grid>
    </Grid>
  )
}

export default CategoryWiseAdvocate