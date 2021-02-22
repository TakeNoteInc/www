const { NODE_ENV } = process.env;

//get user
export const GET_USER_URI =
  NODE_ENV === "development"
    ? process.env.REACT_APP_STAG_GET_USER_URI
    : process.env.REACT_APP_PROD_GET_USER_URI;

//create user
export const CREATE_USER_URI =
  NODE_ENV === "development"
    ? process.env.REACT_APP_STAG_CREATE_USER_URI
    : process.env.REACT_APP_PROD_GET_USER_URI;
