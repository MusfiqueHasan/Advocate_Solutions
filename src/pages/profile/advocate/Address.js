import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const Address = ({ user }) => {

  return (
    <Paper sx={{ borderRadius: "12px", p: 4 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
        Contact Information
      </Typography>

      <Box sx={{ display: "flex", my: 5, width:'100%' }}>
        <Box sx={{width: "50%",}}>
          <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
            Email Address
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {user?.email}
          </Typography>
        </Box>
        <Box sx={{width: "50%" }}>
          <Typography sx={{ fontWeight: "500", fontSize: 16 }}>
            Phone Number
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: 16, mt: 0.5 }}>
            {user?.phoneNumber}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Address;
