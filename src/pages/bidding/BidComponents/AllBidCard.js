import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBiddingData } from "../../../redux/actions/biddingAction";

const AllBidCard = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state?.bidding?.biddingPosts);
  // sorted post
  const sortedPosts = allPosts.sort((a, b) => b.createdDate - a.createdDate);

  useEffect(() => {
    dispatch(getBiddingData());
  }, [dispatch]);

  return (
    <div>
      <div className=" grid grid-cols-2 gap-5 p-5">
        {sortedPosts?.map((postInfo) => {
          const {
            casedescription,
            caseTitle,
            caseCategory,
            createdDate,
            caseId,
            biddingHistory,
          } = postInfo;
          const getConfirmation = () => {
            let options = [];
            biddingHistory &&
              biddingHistory.filter((item) => options.push(item.status));

            return !!options.find((item) => item === "confirmed");
          };

          console.log(getConfirmation());

          return (
            <div className=" bg-slate-900 text-white rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="">
                  <div className="flex justify-between">
                    <p className=" text-lg  font-bold">Case Id : {caseId}</p>
                    <h1 className=" text-xl font-bold">
                      {" "}
                      Remaing Time:{createdDate}
                    </h1>
                  </div>

                  <p className=" text-lg font-semibold">
                    Case Category : {caseCategory}
                  </p>
                  <p className=" text-lg font-semibold">
                    Case Title :{" "}
                    <span className=" text-lg font-semibold">{caseTitle}</span>
                  </p>
                  <p className="text-sm ">
                    <span className="text-lg  font-semibold ">
                      Case Details :{" "}
                    </span>
                    {casedescription}
                  </p>
                </div>
              </div>

              <div className="grid place-items-center">
                <Link to={`/bidding_amount`} state={{ data: postInfo }}>
                  <button
                    disabled={getConfirmation()}
                    className={` ${
                      getConfirmation()
                        ? "bg-green-600 hover:bg-green-700 disabled:cursor-not-allowed"
                        : "bg-sky-600 hover:bg-sky-700"
                    } mt-2 text-center font-bold px-10 py-2 rounded-xl  `}
                  >
                    {getConfirmation() ? "Booked" : "Go For Bid"}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBidCard;
