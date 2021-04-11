import { SET_ENTRIES, SET_USER, SET_WEEKS } from "./TYPES";
import axios from "axios";
import store from "../store";
import { reduceUser } from "./user";

const BASE_URL = "https://vip3e81bu0.execute-api.us-east-1.amazonaws.com/test";

export const getEntries = (weekId) => (dispatch) => {
  const state = store.getState();
  const entries = state.weeksData.weeks[weekId].entries;
  dispatch({ type: SET_ENTRIES, payload: entries });
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
    const res = await axios.post(path, data, headers);
    console.log(res);
    const user = res.data.data.Attributes;
    dispatch({ type: SET_USER, payload: user });
    const weeks = user.docBody.journal.weeks;
    const entries = user.docBody.journal.weeks[weekId].entries;
    dispatch({ type: SET_WEEKS, payload: weeks });
    dispatch({ type: SET_ENTRIES, payload: entries });
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
    const res = await axios.put(path, { entry }, headers);
    console.log(res.data.Attributes);
    console.log(weekId);
    dispatch(reduceUser(res.data.Attributes), weekId);
  } catch (err) {
    console.log(err);
  }
};
