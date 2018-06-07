import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  SET_AUTH_PARAMS
} from "../actions"

const initAuth = {
  status: false,
  token: ""
}

function auth(state = initAuth, action) {
  console.log(action)
  if (action.type === SET_AUTH_PARAMS) {
    delete action.type;
    return {
      ...state,
      ...action
    }
  }
  return state;
}

export default combineReducers({
  auth,
  router: routerReducer
});