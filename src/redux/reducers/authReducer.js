import {
  GOOGLE_SIGNIN_FAIL,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNOUT_FAIL,
  GOOGLE_SIGNOUT_START,
  GOOGLE_SIGNOUT_SUCCESS,
  SET_USERINFO,
} from "../types";

const initState = {
  error: null,
  currentUser: {},
  loading: false,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case GOOGLE_SIGNIN_START:
    case GOOGLE_SIGNOUT_START:
      return {
        ...state,
        loading: true,
      };
    case SET_USERINFO:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case GOOGLE_SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
      };
    case GOOGLE_SIGNIN_FAIL:
    case GOOGLE_SIGNOUT_FAIL:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
export default authReducer;
