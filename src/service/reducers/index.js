import { combineReducers } from "redux";
import rocketReducer from "./rocketReducer";
import bannerReducer from "./bannerReducer";

export default combineReducers({ rocketReducer, bannerReducer })