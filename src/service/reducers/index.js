import { combineReducers } from "redux";
import rocketReducer from "./rocketReducer";
import capsulesReducer from "./capsulesReducer"

export default combineReducers({ rocketReducer, capsulesReducer })