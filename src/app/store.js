
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
    campsites: campsitesReducer
  },
});
