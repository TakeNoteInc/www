import { SET_WEEKS } from "./TYPES";
import axios from "axios";

const BASE_URL = "https://vip3e81bu0.execute-api.us-east-1.amazonaws.com/test";

export const getWeeks = (cognitoUser) => async (dispatch) => {
  try {
    const BEARER_TOKEN = "Bearer " + cognitoUser.jwtToken;
    const headers = { headers: { Authorization: BEARER_TOKEN } };
    const path = BASE_URL + `/users/${cognitoUser.cognitoId}/journal/weeks`;
    const res = await axios.get(path, headers);
    dispatch({ type: SET_WEEKS, payload: res.data.Item.docBody.journal.weeks });
  } catch (err) {
    console.log(err);
  }
};

export const setWeeksData = (weeks) => (dispatch) => {
  dispatch({ type: SET_WEEKS, payload: weeks });
};
