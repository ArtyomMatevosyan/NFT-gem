// import OneByOneImg from "../../assets/home/oneByOne.svg";
import OneByOneImg from "../../assets/home/oneByOne.svg";
import SearchIcon from "../../assets/home/SearchIcon";

import BackgroundVideo from "./BackgroundVideo";
// import { homeAnnounceSmallImgFakeData } from "./HomeAnnounceSmallImageFakeData";

const HomeAnnounce = () => {
  return (
    <div className="home__announceContainer">
      <BackgroundVideo />
      <div className="home__announce__container">
        <div className="home__announce">
          <p> NFT 1.0: static jpegs</p>
          <h1>NFT 2.0/Nextgem: Introducing a world of possibilities!</h1>
          <div>
            <SearchIcon color="white" />
            <input type="text" placeholder="Enter your search terms here" />
          </div>
        </div>
        <span>
          <img src={OneByOneImg} alt="" />
          <div className="home__announce__container__aaa"></div>
          <div className="home__announce__container__animatedDiv">
            {/* {homeAnnounceSmallImgFakeData.map(
              (item: { img: string; id: number }) => (
                <img src={item.img} alt={"/"} key={item.id} />
              )
            )} */}
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
          </div>
          <div className="home__announce__container__animatedSecondDiv">
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
          </div>
          <div className="home__announce__container__animatedThirdDiv">
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
          </div>
          <div className="home__announce__container__animatedFourDiv">
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
          </div>
          <div className="home__announce__container__animatedFiftyDiv">
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
            <img src={OneByOneImg} alt="" />
          </div>
        </span>
        <div className="home__announce__mobileInput">
          <SearchIcon color="#C4C4C4" />
          <input type="text" placeholder="Enter your search terms here" />
        </div>
      </div>
    </div>
  );
};

export default HomeAnnounce;
