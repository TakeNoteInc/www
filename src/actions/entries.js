import { SET_ENTRIES } from "./TYPES";
import axios from "axios";

const BASE_URL = "https://vip3e81bu0.execute-api.us-east-1.amazonaws.com/test";

export const getEntries = (cognitoUser, weekId) => async (dispatch) => {
  try {
    const headers = {
      headers: { Authorization: "Bearer " + cognitoUser.jwtToken },
    };
    const path =
      BASE_URL + `/users/${cognitoUser.cognitoId}/journal/weeks/${weekId}`;
    const res = await axios.get(path, headers);
    dispatch({
      type: SET_ENTRIES,
      payload: res.data.Item.docBody.journal.weeks[0].entries,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addEntry = (cognitoUser, weekId) => async (dispatch) => {
  try {
    const data = {
      entry: {
        content: "version 3.",
      },
    };
    const headers = {
      headers: { Authorization: "Bearer " + cognitoUser.jwtToken },
    };
    const path =
      BASE_URL +
      `/users/${cognitoUser.cognitoId}/journal/weeks/${weekId}/entries`;
    await axios.post(path, data, headers);
    // re-fetch entries to show newly created entry
    dispatch(getEntries(cognitoUser, weekId));
  } catch (err) {
    console.log(err);
  }
};

export const updateEntry = (cognitoUser, entryId, weekId, entry) => async (
  dispatch
) => {
  try {
    const headers = {
      headers: { Authorization: "Bearer " + cognitoUser.jwtToken },
    };
    const path =
      BASE_URL +
      `/users/${cognitoUser.cognitoId}/journal/weeks/${weekId}/entries/${entryId}`;
    await axios.put(path, { entry }, headers);
    // re-fetch entries to show newly created entry
    dispatch(getEntries(cognitoUser, weekId));
  } catch (err) {
    console.log(err);
  }
};
