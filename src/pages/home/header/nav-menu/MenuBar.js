import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FAQ from "./../../../faq/FAQ";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changBackground = () => {
    window.scrollY >= 90 ? setNavbar(false) : setNavbar(true);
  };
  window.addEventListener("scroll", changBackground);

  return (
    <Box
      sx={
        navbar
          ? { height: 100, position: "fixed", left: "12%", width: "76%" }
          : { height: 100, position: "fixed", top: 0, width: "100%" }
      }
      style={{ zIndex: 100 }}
    >
      <Box
        sx={{
          bgcolor: "#192a56",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        <Box
          sx={
            navbar
              ? {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }
              : {
                  width: "76%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }
          }
        >
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Box
                sx={{
                  width: "90%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    height: 100,
                    color: "white",
                    fontFamily: "-moz-initial",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      borderTop: "3.5px solid #ccae62",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  Home{" "}
                </Typography>
                <Typography
                  sx={{
                    height: 100,
                    color: "white",
                    fontFamily: "-moz-initial",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      borderTop: "3.5px solid #ccae62",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  About Us{" "}
                </Typography>
                <Typography
                  sx={{
                    height: 100,
                    color: "white",
                    fontFamily: "-moz-initial",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      borderTop: "3.5px solid #ccae62",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  Attorneys{" "}
                </Typography>
                <Typography
                  sx={{
                    height: 100,
                    color: "white",
                    fontFamily: "-moz-initial",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      borderTop: "3.5px solid #ccae62",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  News{" "}
                </Typography>
                <Typography
                  sx={{
                    height: 100,
                    color: "white",
                    fontFamily: "-moz-initial",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      borderTop: "3.5px solid #ccae62",
                      color: "white",
                    },
                  }}
                >
                  <Link to="/faq">FAQ</Link>
                </Typography>
                <Typography
                  sx={{
                    height: 100,
                    color: "white",
                    fontFamily: "-moz-initial",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      borderTop: "3.5px solid #ccae62",
                      color: "white",
                    },
                  }}
                >
                  <Link to="/contact">Contact</Link>{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: "90%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    px: 5,
                    py: 2,
                    "&:hover": {
                      bgcolor: "#ccae62",
                      color: "white",
                    },
                  }}
                >
                  CONSULTATION
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBar;
