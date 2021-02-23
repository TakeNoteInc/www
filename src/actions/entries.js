import { SET_ENTRIES } from "./TYPES";
import axios from "axios";

const BASE_URL = "https://vip3e81bu0.execute-api.us-east-1.amazonaws.com/test";

export const getEntries = (cognitoId, jwtToken, weekId) => async (dispatch) => {
  try {
    const BEARER_TOKEN = "Bearer " + jwtToken;
    const headers = { headers: { Authorization: BEARER_TOKEN } };
    const path = BASE_URL + `/users/${cognitoId}/journal/weeks/${weekId}`;
    const res = await axios.get(path, headers);
    dispatch({
      type: SET_ENTRIES,
      payload: res.data.Item.docBody.journal.weeks[0].entries,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addEntry = (cognitoId, jwtToken, weekId) => async (dispatch) => {
  try {
    const data = {
      entry: {
        content: "",
      },
    };
    const BEARER_TOKEN = "Bearer " + jwtToken;
    const headers = { headers: { Authorization: BEARER_TOKEN } };
    const path =
      BASE_URL + `/users/${cognitoId}/journal/weeks/${weekId}/entries`;
    await axios.post(path, data, headers);
    // re-fetch entries to show newly created entry
    dispatch(getEntries(cognitoId, jwtToken, weekId));
  } catch (err) {
    console.log(err);
  }
};
