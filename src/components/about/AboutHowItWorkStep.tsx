import { FC } from "react";

import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";

import { AboutHowItWorkStepProps } from "./model";

const AboutHowItWorkStep: FC<AboutHowItWorkStepProps> = ({
  info,
  step,
  imgUrl,
}) => {
  return (
    <div className="aboutItWorks__content__steps__oneStep">
      {imgUrl?.length !== 0 ? (
        <img src={imgUrl} alt="" />
      ) : (
        <div className="aboutItWorks__content__steps__oneStep--img">
          <ImgIcon />
        </div>
      )}
      <p className="aboutItWorks__content__steps__oneStep--stepQuantity">
        Step {step}
      </p>
      <p className="aboutItWorks__content__steps__oneStep--text">{info}</p>
    </div>
  );
};

export default AboutHowItWorkStep;
