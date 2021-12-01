import { FC } from "react";

import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";

import { HomeHowItWorksStepProps } from "./model";

const HomeHowItWorksStep: FC<HomeHowItWorksStepProps> = ({
  title,
  stepDescription,
  onClick,
}) => {
  return (
    <div className="HomeHowItWorksStep__container" onClick={onClick}>
      <div className="HomeHowItWorksStep__container--imgDiv">
        <ImgIcon />
        <p
          className={
            stepDescription
              ? "HomeHowItWorksStep__container--imgDiv--text--hide"
              : "HomeHowItWorksStep__container--imgDiv--text"
          }
        >
          Photo of the category
        </p>
      </div>
      <div className="HomeHowItWorksStep__container--stepNum">
        <p> {title}</p>
      </div>
      <div
        className={
          stepDescription
            ? "HomeHowItWorksStep__container--description"
            : "HomeHowItWorksStep__container--description--hide"
        }
      >
        <p>{stepDescription}</p>
      </div>
    </div>
  );
};

export default HomeHowItWorksStep;
