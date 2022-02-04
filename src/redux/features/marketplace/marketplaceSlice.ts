import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getMarketplaceData } from "../../../api/api";
import { AppThunk } from "../../store";

import {
  CollectionAndTypeFilterTypes,
  IMarketplaceState,
  MarketplaceDataType,
  PriceFilterTypes,
} from "./model";

const initialState: IMarketplaceState = {
  loading: false,
  error: "",
  data: [],
  filteredData: [],
  filters: {
    type: [],
    collection: [],
    price: {
      from: null,
      to: null,
    },
    sort: null,
  },
  mergedFilters: [],
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
    setTypeCollectionDataEmpty: (state, { payload }: PayloadAction<string>) => {
      payload === "filterByType"
        ? (state.filters.type = [])
        : (state.filters.collection = []);
    },
    addTypeCollectionFilterTextContent: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      if (!state.mergedFilters.includes(payload)) {
        state.mergedFilters = [...state.mergedFilters, payload];
      } else {
        const index = state.mergedFilters.indexOf(payload);
        state.mergedFilters.splice(index, 1);
      }
      console.log(state.mergedFilters);
    },

    setPriceFilter: (state, { payload }: PayloadAction<PriceFilterTypes>) => {
      if (
        state.filters.price.to !== payload.to ||
        state.filters.price.from !== payload.from
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

    // filtrateDataByType: (
    //   state,
    //   { payload }: PayloadAction<MarketplaceDataType[]>
    // ) => {
    //   state.filteredData = [...state.filteredData, ...payload];
    // },
    // setEmptyFilteredData: (state) => {
    //   state.filteredData = [];
    // },

    // filtrateDataByCollection: (
    //   state,
    //   { payload }: PayloadAction<MarketplaceDataType[]>
    // ) => {
    //   state.filteredData = [];
    //   state.filteredData = [...state.filteredData, ...payload];
    // },
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
  setTypeCollectionDataEmpty,
  addTypeCollectionFilterTextContent,
  // setEmptyFilteredData,
  setPriceFilter,
  getMarketplaceDataFailure,
  getMarketplaceDataSuccess,
  // filtrateDataByType,
  // filtrateDataByCollection,
} = marketplaceSlice.actions;

export default marketplaceSlice.reducer;

export const createSelector = (state: IMarketplaceState) => state;
