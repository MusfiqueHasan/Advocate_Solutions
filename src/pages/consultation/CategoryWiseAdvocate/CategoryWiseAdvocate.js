import { Grid, Paper } from "@mui/material";
import React from "react";
// import doc1 from "../../../assets/doc1.jpg";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import CategorySearch from "./CategorySearch";

const CategoryWiseAdvocate = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs={3} sx={{ position: "relative" }}>
        <CategorySearch />
      </Grid>
      <Grid item xs={9} sx={{ p: 5 }}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Grid>
    </Grid>
  );
};

export default CategoryWiseAdvocate;
