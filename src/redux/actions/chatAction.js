
import { useSelector } from "react-redux";
import { CHANGE_USER } from "../types";

export const changeUserForChat = (data) => async (dispatch) => {
  console.log(data)
    const { currentUser } = useSelector((state) => state.authentication);
    console.log(currentUser)
    try {
      dispatch({
        type:  CHANGE_USER,
        payload: {
            userInfo: data,
            userInfoId:  currentUser.uid > data.uid
            ? currentUser.uid + data.uid
            : data.uid + currentUser.uid,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

