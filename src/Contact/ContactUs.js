import React from "react";
import "./Contact.css";
import ContactUsAnimation from "../Animations/ContactUsAnimation";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const ContactUs = () => {
  return (
    <div className=" mt-16">
      <div>
        <div className=" py-7">
          <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
            Contact Us
          </h1>
        </div>
        <div className=" grid grid-cols-2 place-items-center px-5 xl:px-20">
          <div className=" border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full px-5 xl:px-10 ">
            <Box sx={{ "& > :not(style)": { m: 3 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Your Name"
                  variant="standard"
                  className=" w-full"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Your Email"
                  variant="standard"
                  className=" w-full"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
                <LocalPhoneIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Your Phone No"
                  variant="standard"
                  className=" w-full"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", my: 3 }}>
                <QueryStatsIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Describe Your Query"
                  variant="standard"
                  className=" w-full"
                />
              </Box>
              {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Name"
                  variant="standard"
                  className=" w-full"
                />
              </Box> */}
            </Box>
            <div className=" px-5">
              <button className="custom-btn getStartedBtn  text-xl p-3 ">
                <span>Lets go!</span>
                <span> Send Us</span>
              </button>
            </div>
          </div>
          <div className="">
            <ContactUsAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
