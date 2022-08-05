import { configureStore } from '@reduxjs/toolkit';
import {campsitesReducer} from '../features/campsites/CampsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnerReducer } from '../features/partners/PartnerSlice';
import {  promotionsReducer } from '../features/promotions/PromotionsSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    promotions:  promotionsReducer,
    comments: commentsReducer,
    partners:partnerReducer

  },
});
