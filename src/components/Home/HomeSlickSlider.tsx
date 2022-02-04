import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as HomeSlideBackgroundIcon } from "../../assets/home/homeSlideBackground.svg";

import { homeSlickData } from "./HomeSlickSliderFakeData";
import HomeSliderCollectionCard from "./HomeSliderCollectionCard";

const HomeSlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="homeSlickSlider">
      <div className="homeSlickSlider__wrapper">
        <HomeSlideBackgroundIcon />
        <div className="homeSlickSlider__wrapper--pinkFilter"></div>

        <Slider {...settings}>
          {homeSlickData.map(({ author, img, collectionName }, i) => (
            <HomeSliderCollectionCard
              collectionName={collectionName}
              author={`by ${author}  N${i}`}
              img={img}
              key={uuid_v4()}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlickSlider;
