import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { request } from "./request"

export default combineReducers({
	request,
  router: routerReducer
});