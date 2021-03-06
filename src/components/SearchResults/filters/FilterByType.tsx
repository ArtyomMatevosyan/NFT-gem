import { FC } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as TypeFilterIcon } from "../../../assets/searchResult/typefilter.svg";
import {
  addTypeCollectionFilter,
  addTypeCollectionFilterTextContent,
} from "../../../redux/features/marketplace/marketplaceSlice";
import { useAppSelector } from "../../../redux/hook";

import { filterByTypeFakeData } from "./filterByTypeFakeData";
import { ITypeFilterProps } from "./model";

const FilterByType: FC<ITypeFilterProps> = ({
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
  typeFilterState,
}) => {
  const {
    filterByType,
  } = useAppSelector(
    ({ marketplaceData }) => ({
      filterByType: marketplaceData.filters.type,
      mergedFilters: marketplaceData.mergedFilters,
    }),
    shallowEqual
  );
  const idArr = filterByType.map(({ id }) => id);

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
        className: e.target.parentElement.parentElement.parentElement.className,
        textContent: e.target.textContent as string,
        id: e.target.parentElement.id,
      })
    );
    dispatch(
      addTypeCollectionFilterTextContent(e.target.textContent as string)
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
          {filterByTypeFakeData.map(({ name, id }) => (
            <div id={`${id}`} key={id}>
              <p>{name}</p>
              {idArr.includes(`${id}`) ? <span></span> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterByType;
