import { SET_ENTRIES } from "../actions/TYPES";

export default function userReducer(
  state = {
    entries: null,
  },
  action
) {
  switch (action.type) {
    case SET_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    default:
      return state;
  }
}
