import { FC, useState } from "react";

import { ReactComponent as HeartIcon } from "../../assets/creator/heart.svg";
import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";
import { ReactComponent as KeyIcon } from "../../assets/searchResult/keyIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/searchResult/shareIcon.svg";

import { NFTCollectionCardProps } from "./model";

const NFTCollectionCard: FC<NFTCollectionCardProps> = ({
  imageUrl,
  likesCount,
  price,
  creator,
  owner,
  onDblClick,
}) => {
  const [showBuyNow, setShowBuyNow] = useState<boolean>(false);

  return (
    <div className="nftCollectionCard">
      <div
        className="nftCollectionCard__imgSection"
        onDoubleClick={onDblClick}
        onMouseMove={() => setShowBuyNow(true)}
        onMouseLeave={() => setShowBuyNow(false)}
      >
        <div className="nftCollectionCard__imgSection--iconPart">
          <div>
            <HeartIcon />
            <span>{likesCount}</span>
          </div>
          <ShareIcon />
        </div>
        <div className="nftCollectionCard__imgSection__imgDiv">
          {imageUrl.length !== 0 ? (
            <img src={imageUrl} alt="" />
          ) : (
            <>
              <ImgIcon />
              <p>Photo</p>
            </>
          )}
          {showBuyNow ? <span>Buy now</span> : null}
        </div>
      </div>
      <div className="nftCollectionCard__infoSection">
        <div>
          <span>Collection Name</span>
          <p>
            {price}
            ETH
          </p>
        </div>
        <div>
          <p>by {creator}</p>
          <span>
            {owner} <KeyIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NFTCollectionCard;
