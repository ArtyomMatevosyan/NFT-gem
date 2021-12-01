import { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";

import { fetchMarketplaceData } from "../../redux/features/marketplace/marketplaceSlice";

import PaginationSection from "./PaginationSection";
import ResultsSection from "./ResultsSection";
import SearchSection from "./SearchSection";

const SearchResults = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketplaceData());
  }, [dispatch]);

  const scrollTopRef = useRef<any>(null);

  const [pageNum, setPageNum] = useState<number>(1);

  return (
    <div className="searchResult">
      <div className="searchResult__scrollTop" ref={scrollTopRef}></div>
      <SearchSection />
      <div className="searchResult__openCollection">
        <ResultsSection pageNum={pageNum} />
        <PaginationSection
          pageNum={pageNum}
          scrollTopRef={scrollTopRef}
          setPageNum={setPageNum}
        />
      </div>
    </div>
  );
};

export default SearchResults;
