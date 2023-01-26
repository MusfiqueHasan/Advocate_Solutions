import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

const GenaralInfo = ({ doctorInfo }) => {
  const { currentUser } = useSelector((state) => state.authentication);
  return (
    <div className="">
      <Paper data-aos="fade-up" sx={{ borderRadius: "12px", p: 4 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          General Information
        </Typography>

        {/* <Box sx={{ display: "flex", flexWrap: "wrap",  mt: 3 , alignItems:'center' }}>
          <Typography sx={{ fontWeight: "500", fontSize: 16,}}>
            Advocate Status:
          </Typography>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: 16,
              ml: 2,
              color: currentUser?.emailVerified ? "green" : "blue",
              
            }}
          >
            {currentUser?.emailVerified ? "Senior Advocate" : "Junior Advocate"}
          </Typography>
        </Box> */}
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ fontWeight: "500", fontSize: 16, mt: 3 }}>
              Education
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
              {/* {d_education} */}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "500", fontSize: 16, mt: 3 }}>
              Experience
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
              {/* {d_experience} */}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", my: 5 }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
              Doctor ID
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
              {/* {d_id} */}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
              Fee
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
              {/* ট {d_charge} */}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default GenaralInfo;
