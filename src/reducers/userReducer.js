import { SET_USER, SET_COGNITO_DATA } from "../actions/TYPES";

export default function userReducer(
  state = {
    user: null,
    cognitoUser: null,
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
    case SET_COGNITO_DATA:
      return {
        ...state,
        cognitoUser: action.payload,
      };
    default:
      return state;
  }
}
