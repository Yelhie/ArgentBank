import { createAction } from "@reduxjs/toolkit";
import { loadUser } from "./UserAction";

const baseURL = "http://localhost:3001/api/v1/user/";

export const getTokenSuccess = createAction("GET_TOKEN_SUCCESS", (token) => ({
  payload: token,
}));
export const getTokenError = createAction("GET_TOKEN_ERROR", (error) => ({
  payload: error,
}));

export const loadToken = (email, password, navigate) => async (dispatch) => {
  dispatch(getTokenSuccess({ isGetting: true }));

  try {
    const response = await fetch(`${baseURL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const {
      body: { token },
    } = await response.json();

    localStorage.setItem("token", token);

    dispatch(getTokenSuccess({ token, tokenTrue: true, isGetting: false }));

    await dispatch(loadUser(token));
    navigate("/user");
  } catch (error) {
    dispatch(
      getTokenError({
        error: error.message,
        isGetting: false,
        tokenTrue: false,
      })
    );
  }
};
