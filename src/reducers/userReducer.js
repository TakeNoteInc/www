import { SET_USER } from "../actions/TYPES";

export default function (state = { user: null }, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
