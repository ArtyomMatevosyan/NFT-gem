import { FC } from "react";

import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";

import AboutCategoryAction from "./AboutCategoryAction";
import { AboutCategoryProps } from "./model";

const AboutCategory: FC<AboutCategoryProps> = ({ aboutCategoryData, data }) => {
  return (
    <div className="aboutCategory">
      <div className="aboutCategory__wrapper">
        <div className="aboutCategory__wrapper__upperSection">
          <div className="aboutCategory__wrapper__upperSection--imgDiv">
            <ImgIcon />
          </div>
          <div className="aboutCategory__wrapper__upperSection--infoSection">
            <span>{aboutCategoryData.title}</span>
            <div>
              <p>{aboutCategoryData.descriptionOne}</p>
              <p>{aboutCategoryData.descriptionTwo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutCategory__actionSection">
        <div className="aboutCategory__actionSection--takeActionDiv">
          <p>Take action</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla scelerisque orci, enim morbi tellus mauris. Nam sit tincidunt
            at sagittis sem enim ut nunc maecenas.
          </span>
        </div>
        <div className="aboutCategory__actionSection--actions">
          {data.map(({ description, imgUrl, title }) => (
            <AboutCategoryAction
              key={uuid_v4()}
              title={title}
              description={description}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCategory;
