import { FC } from "react";

import { shallowEqual } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import { MarketplaceDataType } from "../../redux/features/marketplace/model";
import { useAppSelector } from "../../redux/hook";

import { ResultsSectionProps } from "./model";
import NFTCollectionCard from "./NFTCollectionCard";
import { searchResultFakeData } from "./searchResultFakeData";

const ResultsSection: FC<ResultsSectionProps> = ({ pageNum }) => {
  const { marketplaceData } = useAppSelector(
    ({ marketplaceData }) => ({
      marketplaceData: marketplaceData.data,
    }),
    shallowEqual
  );

  const HandleDoubleClick = (item: MarketplaceDataType, i: number) => {
    if (item.id === i) {
      console.log(item);
      console.log(searchResultFakeData);
    }
  };

  return (
    <div className="searchResult__openCollection__results">
      {marketplaceData?.map((item, i) =>
        i <= pageNum * 15 - 1 && i >= (pageNum - 1) * 15 ? (
          <NFTCollectionCard
            onDblClick={() => HandleDoubleClick(item, i)}
            creator={item.creator}
            owner={item.owner}
            likesCount={i + 1}
            price={item.price}
            imageUrl={item.imageUrl}
            key={uuid_v4()}
          />
        ) : null
      )}
    </div>
  );
};

export default ResultsSection;
