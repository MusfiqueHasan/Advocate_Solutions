import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import HistoryAnimation from "../../../Animations/HistoryAnimation";
import {
  getBiddingData,
  updateBiddingPost,
} from "../../../redux/actions/biddingAction";

const BiddHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { history } = location.state;
  const [historyData, setHistoryData] = useState(history);
  const allPosts = useSelector((state) => state?.bidding?.biddingPosts);
  const [isDisabled, setIsDisabled] = useState("");

  const handleUpdateStatus = (index) => {
    let copyPost = { ...historyData };

    copyPost.biddingHistory.find((_, i) => i === index).status = "confirmed";
    dispatch(updateBiddingPost(copyPost, copyPost?.id));
    localStorage.setItem("status", "pending");
    setIsDisabled("pending");
  };

  const getStatus = () => {
    const isConfirmed = historyData?.biddingHistory?.filter(
      (elm) => elm.status === "confirmed"
    );
    return isConfirmed.length > 0 ? true : false;
  };

  useEffect(() => {
    dispatch(getBiddingData());
    const data = allPosts.find((post) => post.id === history.id);
    setHistoryData(data);
  }, [allPosts, dispatch, history.id]);

  useEffect(() => {
    if (isDisabled !== "") {
      const status = localStorage.getItem("status");
      setIsDisabled(status);
    }
  }, []);



  return (
    <div className=" my-16">
      <div className=" py-7">
        <h1 className=" text-xl font-bold font-mono text-center underline underline-offset-8">
          All Bidd History
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  px-5 xl:px-20">
        <div className=" border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full p-3 xl:p-10 ">
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

          <div className=" my-10 w-full">
            <table class="table-auto" style={{ width: "100%" }}>
              <thead className=" border-2 p-5 ">
                <tr className=" border-2 bg-sky-100">
                  <th className=" p-5">Candidate Name</th>
                  <th className=" p-5">Bidding Amount</th>
                  <th className=" p-5">Status</th>
                </tr>
              </thead>
              <tbody>
                {historyData?.biddingHistory?.map((elm, index) => {
                  return (
                    <tr className=" border-2 ">
                      <td className=" p-5">{elm?.bidderName}</td>
                      <td className=" p-5">{elm?.biddingAmount}</td>
                      <td className=" p-5">
                        <button
                          disabled={getStatus()}
                          className={` disabled:cursor-not-allowed disabled:bg-slate-400 mt-2 text-center font-bold px-10 py-2 rounded-xl text-white cursor-pointer capitalize ${elm?.status === "pending"
                              ? " bg-sky-500 hover:bg-sky-600 "
                              : " bg-green-500 hover:bg-green-600 "
                            }  `}
                          onClick={() => handleUpdateStatus(index)}
                        >
                          {elm?.status}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className=" flex justify-center gap-2">
            <Link to="/bidding">
              <button className=" mt-2 capitalize text-center font-bold px-10 py-2 rounded-xl text-white  bg-green-600 hover:bg-green-700 ">
                see all post
              </button>
            </Link>
          </div>
        </div>
        <div className=" ">
          <HistoryAnimation />
        </div>
      </div>
    </div>
  );
};

export default BiddHistory;
