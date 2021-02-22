import { SET_USER, LOADING_TRUE, LOADING_FALSE } from "../actions/TYPES";

export default function userReducer(
  state = {
    user: null,
    loading: true,
  },
  action
) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
