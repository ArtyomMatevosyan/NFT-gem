import { shallowEqual } from "react-redux";

import { ReactComponent as CollectionFilterIcon } from "../../assets/searchResult/collectionFilter.svg";
import { ReactComponent as PriceFilterIcon } from "../../assets/searchResult/priceFilter.svg";
import { ReactComponent as TypeFilterIcon } from "../../assets/searchResult/typefilter.svg";
import { useAppSelector } from "../../redux/hook";

import SelectedFilter from "./SelectedFilter";
import SelectedPriceFilter from "./SelectedPriceFilter";

const SelectedFilters = () => {
  const { typeFilterState, collectionFilterState, priceFilterState } =
    useAppSelector(
      ({ marketplaceData }) => ({
        typeFilterState: marketplaceData.filters.type,
        collectionFilterState: marketplaceData.filters.collection,
        priceFilterState: marketplaceData.filters.price,
      }),
      shallowEqual
    );

  return (
    <div className="searchResult__searchSection__selectedFilters">
      {typeFilterState.map((item) => (
        <SelectedFilter
          className={item.className}
          textContent={item.textContent}
          key={item.id}
          id={item.id}
        >
          <TypeFilterIcon />
        </SelectedFilter>
      ))}
      {collectionFilterState.map((item) => (
        <SelectedFilter
          className={item.className}
          textContent={item.textContent}
          key={item.id}
          id={item.id}
        >
          <CollectionFilterIcon />
        </SelectedFilter>
      ))}
      {priceFilterState.from !== null ? (
        <SelectedPriceFilter
          from={priceFilterState.from}
          to={priceFilterState.to}
        >
          <PriceFilterIcon />
        </SelectedPriceFilter>
      ) : null}
    </div>
  );
};

export default SelectedFilters;
