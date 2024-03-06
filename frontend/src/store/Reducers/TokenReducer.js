import { createReducer } from '@reduxjs/toolkit';
import { getTokenSuccess, getTokenError } from '../Actions/TokenAction';

//état initial du reducer
const initialStateToken = {
  isGetting: false,
  token: '',
  tokenTrue: '',
  error: '',
};

//Création du reducer et de son comportement en fonction des action getTokenSucces et getTokenError/ met a jour l'etat
export const tokenReducer = createReducer(initialStateToken, (builder) => {
  builder.addCase(getTokenSuccess, (state, action) => ({ ...state, ...action.payload }));
  builder.addCase(getTokenError, (state, action) => ({ ...state, ...action.payload }));
});

