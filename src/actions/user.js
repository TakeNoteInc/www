import { SET_USER } from "./TYPES";
import axios from "axios";

const GET_USER_URI =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_STAG_GET_USER_URI
    : process.env.REACT_APP_PROD_GET_USER_URI;

export const getUser = (jwtToken, userId) => async (dispatch) => {
  try {
    const BEARER_TOKEN = "Bearer " + jwtToken;
    const data = { headers: { Authorization: BEARER_TOKEN } };
    const res = await axios.get(GET_USER_URI + userId, data);

    dispatch({ type: SET_USER, payload: res.data.Item });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (data) => (dispatch) => {
  dispatch({ type: SET_USER, payload: data });
};
