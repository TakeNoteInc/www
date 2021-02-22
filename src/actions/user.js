import { SET_USER } from "./TYPES";
import axios from "axios";
import { GET_USER_URI } from "../setupEnv";

export const getUser = (jwtToken, userId) => async (dispatch) => {
  try {
    const BEARER_TOKEN = "Bearer " + jwtToken;
    const data = { headers: { Authorization: BEARER_TOKEN } };
    const res = await axios.get(GET_USER_URI + userId, data);
    const user = res.data.Item ? res.data.Item : null;
    dispatch({ type: SET_USER, payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const setUserData = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};
