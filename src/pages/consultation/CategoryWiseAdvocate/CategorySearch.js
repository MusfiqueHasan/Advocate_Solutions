import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const CategorySearch = () => {
  return (
    <div className="ml-10  w-[20rem]">
      <div className="flex justify-between mb-5">
        <p className=" uppercase font-bold text-xl">Advance Search</p>
        <button className="bg-blue-600 px-4 py-2 rounded-md shadow-md">
          <HiOutlineBars3BottomLeft className="text-2xl text-white cursor-pointer" />
        </button>
      </div>
      <Autocomplete
        size="small"
        id="combo-box-demo"
        options={["Criminal lawer", "Divorce lawer"]}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Specialization" />
        )}
      />
      <Autocomplete
        size="small"
        id="combo-box-demo"
        options={[
          "Dhaka",
          "Chittagong",
          "Rajshahi",
          "Shylet",
          "Barishal",
          "Khulna",
        ]}
        fullWidth
        sx={{ mt: 3 }}
        renderInput={(params) => (
          <TextField {...params} label="Area / Location" />
        )}
      />
      <Autocomplete
        size="small"
        id="combo-box-demo"
        options={[
          "Accident",
          "Adoption",
          "Agency",
          "Contract",
          "Customs",
          "Cyber Crime",
        ]}
        fullWidth
        sx={{ mt: 3 }}
        renderInput={(params) => (
          <TextField {...params} label="Choose Subject" />
        )}
      />
      <div className="mt-3">
        <p className="font-bold mb-3">Experience</p>
        <div className="flex justify-between">
          <TextField
            sx={{ width: "45%" }}
            size="small"
            id="outlined-basic"
            label="Min"
            variant="outlined"
          />
          <TextField
            sx={{ width: "45%" }}
            size="small"
            id="outlined-basic"
            label="Max"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;
