import { FC } from "react";

import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";

import { AboutCategoryActionProps } from "./model";

const AboutCategoryAction: FC<AboutCategoryActionProps> = ({
  title,
  description,
  imgUrl,
}) => {
  return (
    <div className="aboutCategoryAction">
      {imgUrl?.length !== 0 ? (
        <div>
          <img src={imgUrl} alt={title} />
        </div>
      ) : (
        <div>
          <ImgIcon />
        </div>
      )}

      <span>{title}</span>
      <p>{description}</p>
      <button>Explore</button>
    </div>
  );
};

export default AboutCategoryAction;
