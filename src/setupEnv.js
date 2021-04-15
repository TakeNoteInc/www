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

export const REACT_APP_STAG_BASE =
  NODE_ENV === "development"
    ? process.env.REACT_APP_STAG_BASE
    : process.env.REACT_APP_PROD_BASE;

// delete entry
/*
export const DELETE_ENTRY =
  NODE_ENV === "development"
    ? process.env.REACT_APP_STAG_DELETE_ENTRY_URI
    : process.env.REACT_APP_PROD_DELETE_ENTRY_URI;
*/
