import { FC } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as CollectionFilterIcon } from "../../../assets/searchResult/collectionFilter.svg";
import {
  addTypeCollectionFilter,
  addTypeCollectionFilterTextContent,
} from "../../../redux/features/marketplace/marketplaceSlice";
import { useAppSelector } from "../../../redux/hook";

import { filterByCollectionFakeData } from "./filterByCollectionFakeData";
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

  const { filterByCollection } = useAppSelector(
    ({ marketplaceData }) => ({
      filterByCollection: marketplaceData.filters.collection,
    }),
    shallowEqual
  );
  const idArr = filterByCollection.map(({ id }) => id);

  const dispatch = useDispatch();

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
          {filterByCollectionFakeData.map(({ id, name, img }) => (
            <div id={`${id}`} key={id}>
              <img src={img} alt="/" />
              <p>{name}</p>
              {idArr.includes(`${id}`) ? <span></span> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterByCollection;
