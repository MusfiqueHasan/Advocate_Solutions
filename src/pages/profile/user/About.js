import React from "react";
import { Grid, Box } from "@mui/material";
import GenaralInfo from "./GenaralInfo";

const About = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <GenaralInfo  />
        </Grid>

        {/* <Grid item xs={6}>
          <Address  />
        </Grid> */}

      </Grid>
    </Box>
  );
};

export default About;
