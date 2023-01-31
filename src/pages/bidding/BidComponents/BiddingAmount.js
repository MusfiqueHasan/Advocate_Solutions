import { TextField } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import BiddingAnimation from "../../../Animations/BiddingAnimation";
import { db } from "../../../Firebase/Firebase-config";
import {
  getBiddingData,
  updateBiddingPost,
} from "../../../redux/actions/biddingAction";

const BiddingAmount = () => {
  const { currentUser } = useSelector((state) => state.authentication);
  const [isLoginUserId, setIsLoginUserId] = useState("");
  const [biddingInfo, setHistory] = useState({
    bidderName: currentUser?.displayName,
    biddingAmount: 0,
    bidderId: "",
    status: "pending",
  });
  let usersCollectionRef = collection(db, "loginUser");
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  const [historyData, setHistoryData] = useState(data);
  const allPosts = useSelector((state) => state?.bidding?.biddingPosts);

  const [isAdvocate, setIsAdvocate] = useState("");
  const [isError, setIsError] = useState("");

  const getLogedinUserId = async () => {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
    const credential = allData?.find(
      (item) =>
        item.email === currentUser?.email &&
        item.displayName === currentUser?.displayName
    );
    setIsLoginUserId(credential?.id)
    setIsAdvocate(credential?.role);
    setHistory({ ...biddingInfo, bidderId: credential?.id });
  };

  const getStatus = () => {
    const isConfirmed = historyData?.biddingHistory?.filter(
      (elm) => elm?.bidderId === isLoginUserId
    );
    return isConfirmed?.length > 0 ? true : false;
  };


  useEffect(() => {
    getLogedinUserId();
  }, []);

  const handleUpdate = () => {
    if (biddingInfo?.bidderName === "" || biddingInfo?.biddingAmount === 0 || biddingInfo?.biddingAmount === '') {
      setIsError('Please Fill the Amount first')
      setTimeout(() => {
        setIsError('')
      }, 2500)
    } else {
      let copyPost = { ...historyData };

      copyPost.biddingHistory.push(biddingInfo);
      dispatch(updateBiddingPost(copyPost, copyPost?.id));
      localStorage.setItem("isDisabled", true);
    }
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
      <div className=" grid grid-cols-1 md:grid-cols-2  px-5 xl:px-20">
        <div className=" border border-sky-400 hover:border-indigo-500 rounded-xl shadow-lg w-full h-full p-5 xl:p-10 ">
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
            {isError !== '' && <p className="text-left text-red-500 font-bold text-sm mt-2">{isError}</p>}
          </div>
          <div className=" flex justify-center gap-2">
            <Link to="/bidding">
              <button className=" mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-indigo-600 hover:bg-indigo-700 ">
                See All Post
              </button>
            </Link>
            <button
              disabled={getStatus()}
              className=" disabled:bg-slate-300 disabled:cursor-pointer mt-2 text-center font-bold px-10 py-2 rounded-xl text-white  bg-green-500 hover:bg-green-600 "
              onClick={handleUpdate}
            >
              Bidd
            </button>
            {isAdvocate !== "advocate" && (
              <Link to="/bidding_history" state={{ history: data }}>
                <button className=" mt-2 text-center font-bold px-10 py-2 rounded-xl text-white bg-teal-500 hover:bg-teal-600  ">
                  See Bidding History
                </button>
              </Link>
            )}
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
