import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase-config";

const GenaralInfo = ({ doctorInfo }) => {
  let usersCollectionRef = collection(db, "loginUser");
  const { currentUser } = useSelector((state) => state.authentication);
  const [user, setUser]= useState({})
  const getLogedinUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
    const credential = allData.find(
      (item) =>
        item.email === currentUser?.email &&
        item.displayName === currentUser?.displayName
    );

    setUser(credential)
  };

  useEffect(() => {
    getLogedinUser();
  }, [currentUser]);

  
  return (
    <div className="">
      <Paper data-aos="fade-up" sx={{ borderRadius: "12px", p: 4 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          General Information
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ fontWeight: "500", fontSize: 16, mt: 3 }}>
              User Id: 
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {user?.uid}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "500", fontSize: 16, mt: 3 }}>
             Email
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {user?.email}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", my: 5 }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
            Phone Number
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {user?.phoneNumber}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
              Password
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {user?.password}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default GenaralInfo;
