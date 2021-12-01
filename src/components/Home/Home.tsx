import HomeAnnounce from "./HomeAnnounce";
import HomeBrowse from "./HomeBrowse";
import HomeFAQ from "./HomeFAQ";
import HomeHowItWorks from "./HomeHowItWorks";
import HomeSlickSlider from "./HomeSlickSlider";

const Home = () => {
  return (
    <div className="home__container">
      <HomeAnnounce />
      <HomeBrowse />
      <HomeHowItWorks />
      <HomeSlickSlider />
      <HomeFAQ />
    </div>
  );
};

export default Home;
