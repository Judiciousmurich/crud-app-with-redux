// store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/UserSlice';


const store = configureStore({
  reducer: {
    users: usersReducer
  },
});

export default store;
