import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Grid } from "@mui/material";

const MenuBar = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changBackground = () => {
    window.scrollY >= 90 ? setNavbar(false) : setNavbar(true);
  };
  window.addEventListener("scroll", changBackground);

  const navigationHandler = (path) => {
    if (path === "home") {
      navigate("/home");
    } else if (path === "about") {
      navigate("/about");
    } else if (path === "caseStudy") {
      navigate("/case-study");
    } else if (path === "consultation") {
      navigate("/consultation");
    } else if (path === "faq") {
      navigate("/faq");
    } else if (path === "all_news") {
      navigate("/all_news");
    } else if (path === "attorney") {
      navigate("/attorney");
    } else if (path === "all_blogs") {
      navigate("/all_blogs");
    } else if (path === "contact") {
      navigate("/contact");
    } else if (path === "usefull_links") {
      navigate("/usefull_links");
    }
  };

  return (
    <Box
      sx={
        navbar
          ? { height: 100, position: "fixed", left: "8%", width: "85%" }
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
                  width: "95%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => navigationHandler("home")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  Home{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("about")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  About Us{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("caseStudy")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  For Student's{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("attorney")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  Attorneys{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("all_news")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  News{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("all_blogs")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  Blogs{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("faq")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  FAQ{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("contact")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  Contact{" "}
                </Button>
                <Button
                  onClick={() => navigationHandler("usefull_links")}
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
                      bgcolor: "#192a56",
                    },
                  }}
                >
                  {" "}
                  Usefull-Link's{" "}
                </Button>
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
                  onClick={() => navigationHandler("consultation")}
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
