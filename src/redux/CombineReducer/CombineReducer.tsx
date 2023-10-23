import { combineReducers } from "redux";
import LoginReducers from "../Reducers/LoginReducers";

export default combineReducers({
  userAuth: LoginReducers,
});
