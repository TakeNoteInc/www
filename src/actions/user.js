import { SET_USER, SET_COGNITO_DATA, SET_WEEKS, SET_ENTRIES } from "./TYPES";
import axios from "axios";
import { GET_USER_URI } from "../setupEnv";

export const getUser = (cognitoId, jwtToken) => async (dispatch) => {
  try {
    const data = {
      headers: { Authorization: "Bearer " + jwtToken },
    };
    const res = await axios.get(GET_USER_URI + cognitoId, data);

    const user = res.data.Item;
    const weeks = user.docBody.journal.weeks;
    const entries = user.docBody.journal.weeks[0].entries;
    dispatch({ type: SET_USER, payload: user });
    dispatch({ type: SET_WEEKS, payload: weeks });
    dispatch({ type: SET_ENTRIES, payload: entries });
  } catch (e) {
    console.log(e);
    dispatch({ type: SET_USER, payload: {} });
    dispatch({ type: SET_WEEKS, payload: [] });
    dispatch({ type: SET_ENTRIES, payload: [] });
  }
};

export const setCognitoData = (cognitoUser) => (dispatch) => {
  const cognitoId = cognitoUser.attributes.sub;
  const { jwtToken } = cognitoUser.signInUserSession.idToken;
  dispatch({
    type: SET_COGNITO_DATA,
    payload: { cognitoId, jwtToken },
  });
};

export const setUserData = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};
