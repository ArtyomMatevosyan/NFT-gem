import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import CreatorSliderCard from "./CreatorSliderCard";
import { creatorSliderFakeData } from "./CreatorSliderFakeData";

const CreatorSider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    ],
  };

  return (
    <div className="creatorSlider">
      <div className="creatorSlider__container">
        <Slider {...settings}>
          {creatorSliderFakeData.map(() => (
            <CreatorSliderCard key={uuid_v4()} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CreatorSider;
