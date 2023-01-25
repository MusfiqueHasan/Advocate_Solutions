import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

const Address = ({ doctorInfo }) => {
    const { currentUser } = useSelector((state) => state.authentication);

  return (
    <Paper sx={{ borderRadius: "12px", p: 4 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
        Contact Information
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
            Working Place
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {/* {d_woking_place_detials} */}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
            Location
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {/* {d_district} , {d_division} */}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Address;
