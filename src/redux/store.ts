import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import createReducer from "./features/create/createSlice";
import homeReducer from "./features/home/homeSlice";
import marketplaceReducer from "./features/marketplace/marketplaceSlice";
import walletReducer from "./features/wallet/walletSlice";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    homeData: homeReducer,
    createData: createReducer,
    walletData: walletReducer,
    marketplaceData: marketplaceReducer,
  },
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
