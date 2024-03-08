import { createAction } from '@reduxjs/toolkit';

const baseURL = 'http://localhost:3001/api/v1/user/';

// Actions
export const getUserSuccess = createAction('GET_USER_SUCCESS', (user) => ({ payload: user }));
export const getUserError = createAction('GET_USER_ERROR', (error) => ({ payload: error }));
export const logout = createAction('LOGOUT_USER');

// fonctions asynchrones (thunks)
export const loadUser = (token) => async (dispatch) => {
  dispatch(getUserSuccess({ isLoading: true }));

  try {
    const response = await fetch(`${baseURL}profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(getUserSuccess({ user: data, isLoading: false, isLoggedIn: true }));
    return data;
  } catch (error) {
    dispatch(getUserError({ error: error.message, isLoading: false, isLoggedIn: false }));
    throw error;
  }
};

