import { combineReducers } from "redux"

import streamReducer from "../containers/Dashboard/redux/reducer"
import userReducer from "../containers/Login/redux/reducer"

export default combineReducers({
  stream: streamReducer,
  user: userReducer
})