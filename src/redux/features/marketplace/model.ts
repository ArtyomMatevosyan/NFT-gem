export interface IMarketplaceState {
  loading: boolean;
  error: string;
  data: MarketplaceDataType[] | null;
  filters: SearchFilterTypes;
}

export type MarketplaceDataType = {
  imageUrl: string;
  price: number;
  likesCount: number;
  owner: string;
  creator: string;
  id: number;
  isLiked: boolean;
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
  // className: string | null;
};
export type SortByPriceTypes = {
  id: string;
  className: string;
};
