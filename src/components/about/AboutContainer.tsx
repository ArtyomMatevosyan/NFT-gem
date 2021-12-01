import AboutBuyAndSellNFT from "./AboutBuyAndSellNFT";
import AboutContainerWhoIsIt from "./AboutContainerWhoIsIt";
import AboutItWorks from "./AboutItWorks";
import AboutUs from "./AboutUs";

const AboutContainer = () => {
  return (
    <div className="about">
      <AboutUs />
      <AboutItWorks />
      <AboutContainerWhoIsIt />
      <AboutBuyAndSellNFT />
    </div>
  );
};

export default AboutContainer;
