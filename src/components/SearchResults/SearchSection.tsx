import { useState } from "react";

import SearchIcon from "../../assets/home/SearchIcon";

import FilterByCollection from "./filters/FilterByCollection";
import FilterByPrice from "./filters/FilterByPrice";
import FilterByType from "./filters/FilterByType";
import SortByPrice from "./filters/SortByPrice";
import SelectedFilters from "./SelectedFilters";

const SearchSection = () => {
  const [typeFilterState, setTypeFilterState] = useState<boolean>(false);
  const [collectionFilterState, setCollectionFilterState] =
    useState<boolean>(false);
  const [priceFilterState, setPriceFilterState] = useState<boolean>(false);
  const [sortFilterState, setSortFilterState] = useState<boolean>(false);

  return (
    <div className="searchResult__searchSection">
      <div className="searchResult__searchSection__upperPart">
        <div className="searchResult__searchSection__upperPart__searchPart">
          <SearchIcon color="#C4C4C4" />
          <input type="text" placeholder="Enter your search terms here" />
        </div>
        <div className="searchResult__searchSection__upperPart__filters">
          <FilterByType
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
            typeFilterState={typeFilterState}
          />

          <FilterByCollection
            collectionFilterState={collectionFilterState}
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
          />

          <FilterByPrice
            priceFilterState={priceFilterState}
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
          />
          <SortByPrice
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
            sortFilterState={sortFilterState}
          />
        </div>
      </div>
      <SelectedFilters />
    </div>
  );
};

export default SearchSection;
