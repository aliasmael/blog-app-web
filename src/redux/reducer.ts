import { combineReducers } from "redux"

import streamReducer from "../components/Stream/redux/reducer"
import userReducer from "../components/LoginForm/redux/reducer"

export default combineReducers({
  stream: streamReducer,
  user: userReducer
})