import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICreateState } from "./model";

const initialState: ICreateState = {
  loading: false,
  progress: 0,
  createPopupState: false,
  connectWalletState: false,
  menuPopupState: false,
};

const makeSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    changeProgress: (state, { payload }: PayloadAction<number>) => {
      state.progress = payload;
    },
    createPopup: (state, { payload }: PayloadAction<boolean>) => {
      state.createPopupState = payload;
    },
    connectWallet: (state, { payload }: PayloadAction<boolean>) => {
      state.connectWalletState = payload;
    },
    menuPopup: (state, { payload }: PayloadAction<boolean>) => {
      state.menuPopupState = payload;
    },
  },
});

export const {
  setLoading,
  changeProgress,
  connectWallet,
  menuPopup,
  createPopup,
} = makeSlice.actions;

export default makeSlice.reducer;

export const createSelector = (state: ICreateState) => state;
