import { createReducer } from '@reduxjs/toolkit';
import { getUserSuccess, getUserError, logout } from '../Actions/UserAction';

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
});
