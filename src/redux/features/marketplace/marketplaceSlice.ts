import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getMarketplaceData } from "../../../api/api";
import { AppThunk } from "../../store";

import {
  CollectionAndTypeFilterTypes,
  // CollectionFilterTypes,
  IMarketplaceState,
  MarketplaceDataType,
  PriceFilterTypes,
  // TypeFilterTypes,
} from "./model";

const initialState: IMarketplaceState = {
  loading: false,
  error: "",
  data: null,
  filters: {
    type: [],
    collection: [],
    price: {
      from: null,
      to: null,
    },
    sort: null,
  },
};

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    addTypeCollectionFilter: (
      state,
      { payload }: PayloadAction<CollectionAndTypeFilterTypes>
    ) => {
      if (payload.className === "filterByType") {
        const idArr = state.filters.type.map((item) => item.id);
        if (!idArr.includes(payload.id)) {
          state.filters.type = [...state.filters.type, payload];
        } else {
          const index = idArr.indexOf(payload.id);
          state.filters.type.splice(index, 1);
        }
      } else if (payload.className === "filterByCollection") {
        const idArr = state.filters.collection.map((item) => item.id);
        if (!idArr.includes(payload.id)) {
          state.filters.collection = [...state.filters.collection, payload];
        } else {
          const index = idArr.indexOf(payload.id);
          state.filters.collection.splice(index, 1);
        }
      }
    },

    setPriceFilter: (state, { payload }: PayloadAction<PriceFilterTypes>) => {
      if (
        state.filters.price.to !== payload.to ||
        state.filters.price.from !== payload.from
        // && (payload.to as number) > (payload.from as number)
      ) {
        state.filters.price.from = payload.from;
        state.filters.price.to = payload.to;
      } else {
        state.filters.price.from = null;
        state.filters.price.to = null;
      }
    },
    getMarketplaceDataSuccess: (
      state,
      { payload }: PayloadAction<MarketplaceDataType[]>
    ) => {
      state.data = payload;
    },
    getMarketplaceDataFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const fetchMarketplaceData = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await getMarketplaceData();
      dispatch(setLoading(false));
      dispatch(getMarketplaceDataSuccess(res));
    } catch (error: any) {
      dispatch(getMarketplaceDataFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const {
  setLoading,
  addTypeCollectionFilter,
  // setTypeFilter,
  // setCollectionFilter,
  setPriceFilter,
  getMarketplaceDataFailure,
  getMarketplaceDataSuccess,
} = marketplaceSlice.actions;

export default marketplaceSlice.reducer;

export const createSelector = (state: IMarketplaceState) => state;
