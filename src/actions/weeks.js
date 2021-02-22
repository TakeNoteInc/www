import { SET_WEEKS } from "./TYPES";

export const setWeeksData = (weeks) => (dispatch) => {
  dispatch({ type: SET_WEEKS, payload: weeks });
};
