import React from "react";
import { Grid, Box } from "@mui/material";
import GenaralInfo from "./GenaralInfo";
import Address from "./Address";

const About = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <GenaralInfo  />
        </Grid>

        <Grid item xs={6}>
          <Address  />
        </Grid>

      </Grid>
    </Box>
  );
};

export default About;
