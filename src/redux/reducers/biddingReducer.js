import {
    GET_BIDDING,
    GET_SINGLE_BIDDING,
    CREATE_BIDDING,
    UPDATE_BIDDING
} from "../types";

const initState = {
    biddingPosts: [],
    biddingPost: {},
    openModel: false,
    openDialog: false,
};

function biddingReducer(state = initState, action) {
    switch (action.type) {
        case GET_BIDDING:
            return {
                ...state,
                biddingPosts: action.payload,
                loading: false
            };
        case GET_SINGLE_BIDDING:
            return {
                ...state,
                biddingPost: action.payload,
                loading: false
            };
        case CREATE_BIDDING:
        case UPDATE_BIDDING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
export default biddingReducer;