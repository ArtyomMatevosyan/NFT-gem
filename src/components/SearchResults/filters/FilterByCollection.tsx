import { FC } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as CollectionFilterIcon } from "../../../assets/searchResult/collectionFilter.svg";
import collectionNameIcon from "../../../assets/searchResult/collectionNameIcon.png";
import {
  addTypeCollectionFilter,
  // setCollectionFilter
} from "../../../redux/features/marketplace/marketplaceSlice";

import { ICollectionFilterProps } from "./model";

const FilterByCollection: FC<ICollectionFilterProps> = ({
  collectionFilterState,
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
}) => {
  const handleOpenCollectionFilter = () => {
    setTypeFilterState(false);
    setPriceFilterState(false);
    setSortFilterState(false);
    setCollectionFilterState(!collectionFilterState);
  };

  const dispatch = useDispatch();

  const handleAddFilter = (e: any) => {
    dispatch(
      addTypeCollectionFilter({
        className: e.target.parentElement.parentElement.parentElement.className,
        textContent: e.target.textContent as string,
        id: e.target.parentElement.id,
      })
    );
  };

  return (
    <div
      className="filterByCollection"
      style={{
        border: `1px solid ${collectionFilterState ? "#b1dff7" : "#60666b"}`,
      }}
    >
      <div onClick={handleOpenCollectionFilter}>
        <CollectionFilterIcon />
        <p>Collection</p>
      </div>
      {collectionFilterState ? (
        <div onClick={handleAddFilter}>
          <div id="0">
            <img src={collectionNameIcon} alt="/" />
            <p>Name of collection</p>
          </div>
          <div id="1">
            <img src={collectionNameIcon} alt="/" />
            <p>Long name of col...</p>
          </div>
          <div id="2">
            <img src={collectionNameIcon} alt="/" />
            <p>Long name of col...</p>
          </div>
          <div id="3">
            <img src={collectionNameIcon} alt="/" />
            <p>Long name of col...</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterByCollection;
