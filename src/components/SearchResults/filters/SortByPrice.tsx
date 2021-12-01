import { FC } from "react";

import { ReactComponent as PriceDownIcon } from "../../../assets/searchResult/priceDown.svg";
import { ReactComponent as PriceUpIcon } from "../../../assets/searchResult/priceUp.svg";
import { ReactComponent as SortFilterIcon } from "../../../assets/searchResult/sort.svg";

import { ISortPriceProps } from "./model";

const SortByPrice: FC<ISortPriceProps> = ({
  sortFilterState,
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
}) => {
  const handleOpenSortPrice = () => {
    setTypeFilterState(false);
    setCollectionFilterState(false);
    setPriceFilterState(false);
    setSortFilterState(!sortFilterState);
  };

  return (
    <div className="sortByPrice">
      <div onClick={handleOpenSortPrice}>
        <SortFilterIcon />
      </div>
      {sortFilterState ? (
        <div
          onClick={(e: any) => {
            console.dir(e.target.id);
            console.log(e.target.parentElement.parentElement.className);
          }}
        >
          <div>New items</div>
          <div id="up">
            Price <PriceUpIcon />
          </div>
          <div id="down">
            Price <PriceDownIcon />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SortByPrice;
