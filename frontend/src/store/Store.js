import { configureStore } from '@reduxjs/toolkit';
import { getUserReducer } from './Reducers/UserReducer';
import { tokenReducer } from './Reducers/TokenReducer';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: getUserReducer,
  },
  devTools : true, // A changer en False pour désactiver le tool dans navigateur
});

export default store;