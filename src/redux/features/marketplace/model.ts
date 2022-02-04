export interface IMarketplaceState {
  loading: boolean;
  error: string;
  data: MarketplaceDataType[];
  filteredData: MarketplaceDataType[];
  filters: SearchFilterTypes;
  mergedFilters: string[];
}

export type MarketplaceDataType = {
  imageUrl: string;
  price: number;
  likesCount: number;
  owner: string;
  creator: string;
  id: number;
  isLiked: boolean;
  type: string;
  collection: string;
};

type SearchFilterTypes = {
  type: CollectionAndTypeFilterTypes[];
  collection: CollectionAndTypeFilterTypes[];
  price: PriceFilterTypes;
  sort: SortByPriceTypes | null;
};

export type CollectionAndTypeFilterTypes = {
  className: string;
  textContent: string;
  id: string;
};
export type PriceFilterTypes = {
  from: number | null;
  to: number | null;
};
export type SortByPriceTypes = {
  id: string;
  className: string;
};
