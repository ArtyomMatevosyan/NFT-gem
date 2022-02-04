import { FC } from "react";

import { HomeSliderCollectionCardProps } from "./model";

const HomeSliderCollectionCard: FC<HomeSliderCollectionCardProps> = ({
  collectionName,
  author,
  img,
}) => {
  return (
    <div className="homeSliderCollectionCard">
      <div>
        <img src={img} alt="/" />
      </div>
      <div>
        <p>{collectionName}</p>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default HomeSliderCollectionCard;
