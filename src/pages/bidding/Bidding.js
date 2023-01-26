import React from "react";
import titlelineimg from "../../assets/icons/title-line-image-2.png";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import BidPostAdd from "./BidComponents/BidPostAdd";
import AllBidCard from "./BidComponents/AllBidCard";

export const initPost = {
  casedescription: "",
  caseTitle: "",
  caseCategory: "",
  userId: "",
  userRole: "user",
  createdDate: 0,
  biddingHistory: [],
};

function Bidding() {
  const [post, setPost] = useState(initPost);
  const [mode] = useState("light");


  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="mt-12 mb-40">
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <div className="news_title flex flex-col justify-center items-center gap-y-3 ">
            <h1 className=" text-3xl font-bold text-center mt-5 ">
              Biding
            </h1>
            <img src={titlelineimg} alt="title-line-img" />
          </div>

          <div>
            {/* <Sidebar setMode={setMode} mode={mode} /> */}

            <AllBidCard setPost={setPost} post={post} />
          </div>
          <BidPostAdd setPost={setPost} post={post} />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Bidding;
