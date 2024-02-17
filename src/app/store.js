
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { configureStore } from '@reduxjs/toolkit';
import { CommentsReducer } from '../features/comments/CommentsSlice';
import { partnersReducer } from '../features/Partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';



export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: CommentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer
  },
});
