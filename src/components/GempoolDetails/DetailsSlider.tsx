import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { homeSlickData } from "../Home/HomeSlickSliderFakeData";
import { SlickArrowLeft, SlickArrowRight } from "../Home/SliderArrowFunctions";
import CollectionItemCard from "../reusable components/CollectionItemCard";

const DetailsSlider = () => {
  const settings = {
    dots: false,
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
    <div className="detailsSlider">
      <div className="detailsSlider__container">
        <Slider {...settings}>
          {homeSlickData.map((item) => (
            <CollectionItemCard
              className="detailsSlider"
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

export default DetailsSlider;
