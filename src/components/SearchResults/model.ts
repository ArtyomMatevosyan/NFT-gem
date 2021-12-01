import { MouseEventHandler } from "react";

export type ResultsSectionProps = {
  pageNum: number;
};

export type NFTCollectionCardProps = {
  imageUrl: string;
  price: number;
  likesCount: number;
  owner: string;
  creator: string;
  onDblClick?: MouseEventHandler<HTMLDivElement>;
};

export type SelectedFilterProps = {
  className: string;
  textContent: string;
  id: string;
};

export type SelectedPriceFilterProps = {
  from: number | null;
  to: number | null;
};
