import { FC } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as TypeFilterIcon } from "../../../assets/searchResult/typefilter.svg";
import {
  addTypeCollectionFilter,
  // setTypeFilter,
} from "../../../redux/features/marketplace/marketplaceSlice";

import { ITypeFilterProps } from "./model";

const FilterByType: FC<ITypeFilterProps> = ({
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
  typeFilterState,
}) => {
  const dispatch = useDispatch();

  const handleOpenTypeFilter = () => {
    setTypeFilterState(!typeFilterState);
    setCollectionFilterState(false);
    setSortFilterState(false);
    setPriceFilterState(false);
  };

  const handleAddFilter = (e: any) => {
    dispatch(
      addTypeCollectionFilter({
        className: e.target.parentElement.parentElement.className,
        textContent: e.target.textContent as string,
        id: e.target.id,
      })
    );
  };

  return (
    <div
      className="filterByType"
      style={{
        border: `1px solid ${typeFilterState ? "#b1dff7" : "#60666b"}`,
      }}
    >
      <div onClick={handleOpenTypeFilter}>
        <TypeFilterIcon />
        <p>Type</p>
      </div>
      {typeFilterState ? (
        <div onClick={handleAddFilter}>
          <div id="0">Gempools</div>
          <div id="1">Lootboxes</div>
          <div id="2">Raffles</div>
          <div id="3">Card Pack</div>
          <div id="4">Attributed NFT</div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterByType;
