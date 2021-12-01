import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import CollectionItemCard from "../reusable components/CollectionItemCard";

import { homeSlickData } from "./HomeSlickSliderFakeData";
import { SlickArrowLeft, SlickArrowRight } from "./SliderArrowFunctions";

const HomeSlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="homeSlickSlider__container">
      <div className="homeSlickSlider__container__wrapper">
        <Slider {...settings}>
          {homeSlickData.map((item) => (
            <CollectionItemCard
              className="homeSlickSlider"
              collectionName={item.collectionName}
              author={`by ${item.author}`}
              key={uuid_v4()}
              photoCover="Collection cover photo"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlickSlider;
