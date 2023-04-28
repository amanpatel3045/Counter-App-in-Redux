//for combining all reducers
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
   counter: counterReducer,
   isLoggedInStatus: isLoggedReducer
})  

export default allReducers;