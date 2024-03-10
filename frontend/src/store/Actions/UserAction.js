import { createAction } from '@reduxjs/toolkit';

const baseURL = 'http://localhost:3001/api/v1/user/';

// Actions
export const getUserSuccess = createAction('GET_USER_SUCCESS', (user) => ({ payload: user }));
export const getUserError = createAction('GET_USER_ERROR', (error) => ({ payload: error }));
export const logout = createAction('LOGOUT_USER');
export const editUser = createAction('EDIT_USER');
export const editUserSuccess = createAction('EDIT_USER_SUCCESS', (user) => ({ payload: user }));
export const editUserError = createAction('EDIT_USER_ERROR', (error) => ({ payload: error }));

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

export const EditUser = (userName) => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(editUser());

  try {
    const response = await fetch(`${baseURL}profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(editUserSuccess(data));
    dispatch(loadUser(token));
  } catch (error) {
    dispatch(editUserError(error.message));
  }
};
