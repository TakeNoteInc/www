import { SET_USER, SET_COGNITO_DATA, SET_WEEKS, SET_ENTRIES } from "./TYPES";
import axios from "axios";
import { GET_USER_URI } from "../setupEnv";

// fetch user object
export const getUser = (cognitoUser) => async (dispatch) => {
  try {
    const data = {
      headers: { Authorization: "Bearer " + cognitoUser.jwtToken },
    };
    const res = await axios.get(GET_USER_URI + cognitoUser.cognitoId, data);
    const user = res.data.Item;
    dispatch({ type: SET_USER, payload: user });

    const weeks = user.docBody.journal.weeks;
    const entries = user.docBody.journal.weeks[0].entries;
    dispatch({ type: SET_WEEKS, payload: weeks });
    dispatch({ type: SET_ENTRIES, payload: entries });
  } catch (err) {
    console.log(err);
  }
};
