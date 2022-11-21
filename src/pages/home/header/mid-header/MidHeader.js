import React from "react";
import { Box, Container } from "@mui/material";
import logo from "../../../../Assets/images/logo.png";
import { useNavigate, useLocation } from "react-router";

const MidHeader = () => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };

  const location = useLocation();

  return (
    <Box
      sx={{
        height: "100px",
        display: !location?.pathname === "/" ? "hidden" : "block",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          onClick={navigateToHomePage}
          sx={{
            width: "100px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 18,
              fontFamily: "-moz-initial",
              color: "black",
            }}
          >
            Advocate
          </span>
          <img src={logo} alt="" />
          <span
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 18,
              fontFamily: "-moz-initial",
              color: "black",
            }}
          >
            Solutions
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default MidHeader;
