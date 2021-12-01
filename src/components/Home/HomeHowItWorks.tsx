import { v4 as uuid_v4 } from "uuid";

import ButtonBlack from "../reusable components/ButtonBlack";
import ButtonWhite from "../reusable components/ButtonWhite";

import HomeHowItWorksStep from "./HomeHowItWorksStep";
import { howItWorksFakeData } from "./HomeHowItWorksStepsFakeData";

const HomeHowItWorks = () => {
  return (
    <div className="how_it_works__container">
      <div className="how_it_works--title">How Does it Work?</div>
      <div className="how_it_works--steps">
        <div className="how_it_works--steps--container">
          {howItWorksFakeData.map((item) => (
            <div className="how_it_works--steps--container--step" key={uuid_v4()}>
              <HomeHowItWorksStep
                title={`Step ${item.stepNumber}`}
                stepDescription={item.stepDescription}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="how_it_works--explore">
        <div className="how_it_works--explore__wrapper">
          <ButtonBlack
            className="how_it_works--explore__wrapper"
            text="Explore"
          />
          <ButtonWhite
            className="how_it_works--explore__wrapper"
            text="Connect Wallet"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHowItWorks;
