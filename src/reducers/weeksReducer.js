import { SET_WEEKS } from "../actions/TYPES";

export default function userReducer(
  state = {
    weeks: null,
  },
  action
) {
  switch (action.type) {
    case SET_WEEKS:
      return {
        ...state,
        weeks: action.payload,
      };
    default:
      return state;
  }
}
