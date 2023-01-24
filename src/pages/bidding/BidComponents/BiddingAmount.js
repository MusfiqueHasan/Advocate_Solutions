import { TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import BiddingAnimation from "../../../Animations/BiddingAnimation";
import {
  getBiddingData,
  updateBiddingPost,
} from "../../../redux/actions/biddingAction";

const BiddingAmount = () => {
  const [biddingInfo, setHistory] = useState({
    bidderName: "",
    biddingAmount: 0,
    status: "pending",
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  const [historyData, setHistoryData] = useState(data);
  const allPosts = useSelector((state) => state?.bidding?.biddingPosts);


  const handleUpdate = () => {
    let copyPost = { ...historyData };

    copyPost.biddingHistory.push(biddingInfo);
    dispatch(updateBiddingPost(copyPost, copyPost?.id));
  };

  useEffect(() => {
    dispatch(getBiddingData());
    const amountData = allPosts.find((post) => post.id === data?.id);
    setHistoryData(amountData);
  }, [allPosts, data?.id, dispatch]);

  return (
    <div className=" my-16">
      <div className=" py-7">
        <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
          Bidd Here
        </h1>
      </div>
      <div className=" grid grid-cols-2  px-5 xl:px-20">
        <div className=" border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full px-5 xl:p-10 ">
          <div className=" flex justify-end">
            <button className=" rounded-xl p-2 text-xl font-bold bg-sky-300 animate-pulse ">
              Lowest Bidd :{" "}
              {historyData?.biddingHistory?.length === 0
                ? 0
                : historyData?.biddingHistory
                    .map((elm) => elm.biddingAmount)
                    .sort((a, b) => a - b)[0]}{" "}
              BDT
            </button>
          </div>

          <div className=" grid place-items-center m-10">
            <TextField
              type="test"
              value={biddingInfo?.bidderName}
              onChange={(e) =>
                setHistory({ ...biddingInfo, bidderName: e.target.value })
              }
              sx={{ width: "100%" }}
              placeholder="Bidders Name"
              variant="outlined"
            />
            <TextField
              type="number"
              value={biddingInfo?.biddingAmount}
              onChange={(e) =>
                setHistory({ ...biddingInfo, biddingAmount: e.target.value })
              }
              sx={{ width: "100%", mt: 2 }}
              placeholder=" Bidd Your Expected Amount"
              variant="outlined"
            />
          </div>
          <div className=" flex justify-center gap-2">
            <Link to="/bidding">
              <button className=" mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-indigo-600 hover:bg-indigo-700 ">
                See All Post
              </button>
            </Link>
            <button
              className=" mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-green-500 hover:bg-green-600 "
              onClick={handleUpdate}
            >
              Bidd
            </button>
            <Link to="/bidding_history" state={{ history: data }}>
              <button className=" mt-2 text-center font-bold px-10 py-2 rounded-xl text-white bg-teal-500 hover:bg-teal-600  ">
                See Bidding History
              </button>
            </Link>
          </div>
        </div>
        <div>
          <BiddingAnimation />
        </div>
      </div>
    </div>
  );
};

export default BiddingAmount;
