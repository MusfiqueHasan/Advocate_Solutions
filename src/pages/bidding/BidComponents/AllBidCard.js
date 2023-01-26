import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../../../Firebase/Firebase-config";
import { getBiddingData } from "../../../redux/actions/biddingAction";

const AllBidCard = () => {
  let usersCollectionRef = collection(db, "loginUser");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authentication);
  const allPosts = useSelector((state) => state?.bidding?.biddingPosts);
  const [allBiddingPost, setAllBiddingPost] = useState([]);
  const [isAdvocate, setIsAdvocate] = useState("");

  const getLogedinUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
    const credential = allData.find(
      (item) =>
        item.email === currentUser?.email &&
        item.displayName === currentUser?.displayName
    );

    if (credential?.role === "user") {
      let result = allPosts.filter(
        (firstObj) =>
          firstObj.userId === credential.id &&
          firstObj.userRole === credential.role
      );
      const sortedPosts = result.sort((a, b) => b.caseId - a.caseId);
      setAllBiddingPost(sortedPosts);
      setIsAdvocate(credential?.role);
    } else {
      const sortedPosts = allPosts.sort((a, b) => b.caseId - a.caseId);
      setAllBiddingPost(sortedPosts);
    }
  };

  useEffect(() => {
    getLogedinUser();
  }, [allPosts]);

  useEffect(() => {
    dispatch(getBiddingData());
  }, [dispatch]);

  return (
    <div>
      <div className=" grid grid-cols-2 gap-5 p-5">
        {allBiddingPost?.map((postInfo) => {
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

          return (
            <div className=" bg-slate-900 text-white rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="">
                  <div className="flex justify-between">
                    <p className=" text-lg  font-bold">Case Id : {caseId}</p>
                    <h1 className=" text-xl font-bold">
                      {" "}
                      Remaining Time:{createdDate}
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
                {isAdvocate !== "user" ? (
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
                ) : (
                  <Link to="/bidding_history" state={{ history: postInfo }}>
                    <button className=" mt-2 text-center font-bold px-10 py-2 rounded-xl text-white bg-teal-500 hover:bg-teal-600  ">
                      See Bidding History
                    </button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBidCard;
