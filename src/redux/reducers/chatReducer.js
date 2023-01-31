import { CHANGE_USER } from "../types";

const initState = {
  chatId: "null",
  user: {},
};

function chatReducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload?.userInfo,
        chatId:action.payload?.userInfoId,
      };

    default:
      return state;
  }
}
export default chatReducer;
