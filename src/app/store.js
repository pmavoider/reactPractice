import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {campsitesReducer} from '../features/campsites/CampsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnerReducer } from '../features/partners/PartnerSlice';
import {  promotionsReducer } from '../features/promotions/PromotionsSlice';
import {logger} from "redux-logger"


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    promotions:  promotionsReducer,
    comments: commentsReducer,
    partners:partnerReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
