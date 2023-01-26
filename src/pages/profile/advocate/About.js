import React from "react";
import { Grid, Box } from "@mui/material";
import GenaralInfo from "./GenaralInfo";
import Address from "./Address";

const About = ({user}) => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <GenaralInfo user={user}  />
        </Grid>

        <Grid item xs={12}>
          <Address user={user} />
        </Grid>

      </Grid>
    </Box>
  );
};

export default About;
