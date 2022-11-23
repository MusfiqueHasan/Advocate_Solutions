import React from "react";
import { Box } from "@mui/material";
import TopHeader from "./top-header/TopHeader";
import MidHeader from "./mid-header/MidHeader";
import MenuBar from "./nav-menu/MenuBar";
import { useLocation } from "react-router-dom";

const ignoreArr = ["/", "/lawyerAuth"];
const Header = () => {
  const location = useLocation();
  if (ignoreArr.includes(location.pathname)) {
    return null;
  }
  return (
    <Box sx={{ height: 200, overFlow: "hidden" }}>
      <TopHeader />
      <MidHeader />
      <MenuBar />
    </Box>
  );
};

export default Header;
