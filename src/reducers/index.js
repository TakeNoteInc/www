import { combineReducers } from "redux";
import userReducer from "./userReducer";
import weeksReducer from "./weeksReducer";
import entriesReducer from "./entriesReducer";
import notesReducer from "./notesReducer";

export default combineReducers({
  userData: userReducer,
  weeksData: weeksReducer,
  entriesData: entriesReducer,
  notesDate: notesReducer
});
