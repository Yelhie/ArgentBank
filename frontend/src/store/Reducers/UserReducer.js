import { createReducer } from '@reduxjs/toolkit';
import { getUserSuccess, getUserError, logout, editUser, editUserSuccess, editUserError  } from '../Actions/UserAction';

//état initial du reducer
const initialStateUser = {
  isLoading: false, //indique si une opéartion est en cour
  isLoggedIn: false, //indique si l'utilisateur est connecté
  user: {}, // contient les infos utilisateur
  error: '', //stock les erreurs
};

export const getUserReducer = createReducer(initialStateUser, (builder) => {

  builder.addCase(getUserSuccess, (state, action) => ({
    ...state,
    ...action.payload,
  }));

  builder.addCase(getUserError, (state, action) => ({
    ...state,
    ...action.payload,
  }));

  builder.addCase(logout, () => initialStateUser);

  builder.addCase(editUser, (state) => {
    state.isLoading = true;
  });

  builder.addCase(editUserSuccess, (state, action) => {
    state.isLoading = false;
    state.user = action.payload;
    state.error = '';
  });

  builder.addCase(editUserError, (state, action) => {
    state.isLoading = false;
    state.user = {};
    state.error = action.payload;
  });
});
