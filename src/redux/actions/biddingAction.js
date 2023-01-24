import { db } from "../../Firebase/Firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  GET_BIDDING,
  CREATE_BIDDING,
  GET_SINGLE_BIDDING,
  UPDATE_BIDDING,
} from "../types";

let usersCollectionRef = collection(db, "bidding");

export const getBiddingData = () => async (dispatch) => {
  try {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(allData)
    dispatch({
      type:  GET_BIDDING,
      payload: allData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createBiddingPost = (post) => async (dispatch) => {
  console.log(post);
  try {
    await addDoc(usersCollectionRef, post);
    dispatch({ type: CREATE_BIDDING });
    dispatch(getBiddingData());
    console.log("created successfully");
  } catch (error) {
    console.log(error);
  }
};
export const getSingleBiddingData = (id) => async (dispatch) => {
  try {
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const singleData = allData.find((data) => data.id === id);
    dispatch({ type: GET_SINGLE_BIDDING, payload: singleData });
    dispatch(getBiddingData());
  } catch (error) {
    console.log(error);
  }
};

  export const updateBiddingPost= (data, id) => async (dispatch) => {
    try {
      const userDoc = doc(db, "bidding", id);
      await updateDoc(userDoc, data);
      dispatch({ type: UPDATE_BIDDING});
      dispatch(getBiddingData());
      console.log("uploaded successfully");
    } catch (error) {
      console.log(error);
    }
  };