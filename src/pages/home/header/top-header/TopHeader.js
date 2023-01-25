import React from "react";
import { Box, Button, Container, Tooltip, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../Auth/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

const TopHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ height: 40, bgcolor: "#ccae62" }}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {location.pathname === "/profile" ? (
          <Box
            onClick={() => navigate("/home")}
            sx={{
              width: "40px",
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
                fontSize: 10,
                fontFamily: "-moz-initial",
                color: "black",
              }}
            >
              Advocate
            </span>
            <img src={logo} alt="" width={40} />
            <span
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: 10,
                fontFamily: "-moz-initial",
                color: "black",
              }}
            >
              Solutions
            </span>
          </Box>
        ) : (
          <Typography
            sx={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
              fontFamily: "-moz-initial",
            }}
          >
            Here is our
            <span style={{ color: "black", cursor: "pointer" }}>
              {" "}
              Terms and condition{" "}
            </span>
            for the better help.
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/profile">
            <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
              <Typography
                sx={{ color: "white", fontSize: 14, mr: 2, fontWeight: 800 }}
              >
                {user?.displayName}
              </Typography>
              <Tooltip title="User" placement="right">
                <PeopleAltOutlinedIcon
                  sx={{ color: "white", cursor: "pointer" }}
                />
              </Tooltip>
            </Box>
          </Link>
          <Button onClick={() => logOut()}>
            <Tooltip title="logout" placement="right">
              <LogoutIcon sx={{ color: "white", cursor: "pointer" }} />
            </Tooltip>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
