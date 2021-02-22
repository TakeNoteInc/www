import { combineReducers } from "redux";
import userReducer from "./userReducer";
import weeksReducer from "./weeksReducer";
import entriesReducer from "./entriesReducer";

export default combineReducers({
  userData: userReducer,
  weeksData: weeksReducer,
  entriesData: entriesReducer,
});
