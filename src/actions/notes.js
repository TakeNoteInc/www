import { SET_NOTES, SET_USER } from "./TYPES";
import axios from "axios";
import store from "../store";

const BASE_URL = "https://vip3e81bu0.execute-api.us-east-1.amazonaws.com/test";

export const getNotes = () => (dispatch) => {
  const state = store.getState();
  const notes = state.notesData.notes;
  dispatch({ type: SET_NOTES, payload: notes });
};

export const addNote = (cognitoUser, content) => async (dispatch) => {
  try {
    const data = {
      note: {
        content: content,
      },
    };
    const headers = {
      headers: { Authorization: "Bearer " + cognitoUser.jwtToken },
    };
    const path = BASE_URL + `/users/${cognitoUser.cognitoId}/notes`;
    const res = await axios.post(path, data, headers);
    console.log(res);
    const user = res.data.data.Attributes;
    dispatch({ type: SET_USER, payload: user });

    const notes = user.docBody.notes;
    dispatch({ type: SET_NOTES, payload: notes });
  } catch (err) {
    console.log(err);
  }
};

export const updateNote = (cognitoUser, noteID, content) => async (
  dispatch
) => {
  try {
    const data = {
      note: {
        content: content,
      },
    };
    const headers = {
      headers: { Authorization: "Bearer " + cognitoUser.jwtToken },
    };
    const path = BASE_URL + `/users/${cognitoUser.cognitoId}/notes/${noteID}`;
    const res = await axios.put(path, data, headers);
    console.log("res: ", res);

    //not sure why its one data only vs 2 for adding notes?
    const user = res.data.Attributes;
    dispatch({ type: SET_USER, payload: user });

    const notes = user.docBody.notes;
    dispatch({ type: SET_NOTES, payload: notes });
  } catch (err) {
    console.log(err);
  }
};
