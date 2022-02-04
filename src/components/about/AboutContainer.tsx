import HowDoesItWorks from "../ReusableComponents/HowDoesItWorks/HowDoesItWorks";

import AboutBuyAndSellNFT from "./AboutBuyAndSellNFT";
import AboutUs from "./AboutUs";
import AboutWhoIsIt from "./AboutWhoIsIt";

const AboutContainer = () => {
  return (
    <div className="about">
      <AboutUs />
      <HowDoesItWorks />
      <AboutWhoIsIt />
      <AboutBuyAndSellNFT />
    </div>
  );
};

export default AboutContainer;
