import HowDoesItWorks from "../ReusableComponents/HowDoesItWorks/HowDoesItWorks";

import HomeAnnounce from "./HomeAnnounce";
import HomeBrowse from "./HomeBrowse";
import HomeFAQ from "./HomeFAQ";
import HomeSlickSlider from "./HomeSlickSlider";

const Home = () => {
  return (
    <div className="home__container">
      <HomeAnnounce />
      <HomeBrowse />
      <HowDoesItWorks />
      <HomeSlickSlider />
      <HomeFAQ />
    </div>
  );
};

export default Home;
