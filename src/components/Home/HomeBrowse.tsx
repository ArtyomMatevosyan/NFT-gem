import { useHistory } from "react-router";

import HomeHowItWorksStep from "./HomeHowItWorksStep";

const HomeBrowse = () => {
  const history = useHistory();

  return (
    <div className="home__browse">
      <div className="home__browse__wrapper">
        <div className="home__browse__wrapper--title">
          <p>Browse by category</p>
        </div>
        <div className="home__browse__wrapper__imageCardBox__container">
          <div className="home__browse__wrapper__imageCardBox__container__wrapper">
            <HomeHowItWorksStep
              title="Gem Pool"
              onClick={() => history.push("/aboutGempool")}
            />
            <HomeHowItWorksStep
              title="Lootboxes"
              onClick={() => history.push("/aboutLootbox")}
            />
            <HomeHowItWorksStep
              title="Raffles"
              onClick={() => history.push("/aboutRaffles")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrowse;
