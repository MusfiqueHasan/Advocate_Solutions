import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import biddingReducer from "./reducers/biddingReducer";
import newsFeedReducer from "./reducers/newsfeedReducer";


const rootReducer = combineReducers({
    newsfeed: newsFeedReducer,
    bidding: biddingReducer,
    authentication: authReducer,
});


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["newsfeed", "authentication"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export const persistor = persistStore(store);
export default store;