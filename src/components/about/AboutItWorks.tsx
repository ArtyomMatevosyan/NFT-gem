import { v4 as uuid_v4 } from "uuid";

import { aboutStepsData } from "./about.data";
import AboutHowItWorkStep from "./AboutHowItWorkStep";

const AboutItWorks = () => {
  return (
    <div className="aboutItWorks">
      <div className="aboutItWorks__content">
        <div className="aboutItWorks__content--title">How it works</div>
        <p className="aboutItWorks__content--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          scelerisque orci, enim morbi tellus mauris. Nam sit tincidunt at
          sagittis sem enim ut nunc maecenas.
        </p>
        <div className="aboutItWorks__content__steps">
          {aboutStepsData.map((step) => (
            <AboutHowItWorkStep
              key={uuid_v4()}
              info={step.info}
              step={step.step}
              imgUrl={step.imgUrl}
            />
          ))}
        </div>
        <div className="aboutItWorks__content__buttons">
          <button className="aboutItWorks__content__buttons--explore">
            Explore
          </button>
          <button className="aboutItWorks__content__buttons--connect">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutItWorks;
