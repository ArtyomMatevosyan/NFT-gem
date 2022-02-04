import { useState } from "react";

// import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

// import { ReactComponent as NextArrow } from "../../assets/home/next-arrow.svg";
// import { ReactComponent as PrevArrow } from "../../assets/home/prev-arrow.svg";

import HomeBrowseCategory from "./HomeBrowseCategory";
import { homeBrowseCategoryFakeData } from "./HomeBrowseCategoryFakeData";
// import { SlickArrowLeft, SlickArrowRight } from "./SliderArrowFunctions";

const HomeBrowse = () => {
  // const settings = {
  //   dots: false,
  //   infinity: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   nextArrow: (
  //     <SlickArrowRight>
  //       <NextArrow />
  //     </SlickArrowRight>
  //   ),
  //   prevArrow: (
  //     <SlickArrowLeft>
  //       <PrevArrow />
  //     </SlickArrowLeft>
  //   ),
  //   responsive: [
  //     {
  //       breakpoint: 320,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const [displayWidth, setDisplayWidth] = useState<number>(window.innerWidth);

  window.addEventListener(
    "resize",
    () => setDisplayWidth(window.innerWidth),
    false
  );

  return (
    <div className="home__browse">
      <div className="home__browse__wrapper">
        <div className="home__browse__wrapper__imageCardBox__container">
          <div className="home__browse__wrapper__imageCardBox__container__wrapper">
            <h2 className="home__browse__wrapper__imageCardBox__container__wrapper--title">
              Launch your project
            </h2>
            <p className="home__browse__wrapper__imageCardBox__container__wrapper--text_next">
              Nextgem is the first project that gives creators the means to
              launch their NFTs without needing to code.
            </p>
            <p className="home__browse__wrapper__imageCardBox__container__wrapper--text_our">
              Our platform is created to engage your audience with fun and
              innovative technology while allowing them to discover, create, mix
              and sell NFTs in a whole new ways.
            </p>
            {displayWidth >= 1080 ? (
              <>
                <div className="home__browse__wrapper__imageCardBox__container__wrapper__upperPart">
                  {homeBrowseCategoryFakeData.map(
                    ({ path, name, img }, index) =>
                      index < 4 ? (
                        <HomeBrowseCategory
                          name={name}
                          path={path}
                          key={uuid_v4()}
                          img={img}
                        />
                      ) : null
                  )}
                </div>
                <div className="home__browse__wrapper__imageCardBox__container__wrapper__downPart">
                  {homeBrowseCategoryFakeData.map(
                    ({ path, name, img }, index) =>
                      index >= 4 ? (
                        <HomeBrowseCategory
                          name={name}
                          path={path}
                          key={uuid_v4()}
                          img={img}
                        />
                      ) : null
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="home__browse__wrapper__imageCardBox__container__wrapper__allCategories">
                  {homeBrowseCategoryFakeData.map(({ path, name, img }) => (
                    <HomeBrowseCategory
                      name={name}
                      path={path}
                      key={uuid_v4()}
                      img={img}
                    />
                  ))}
                </div>
              </>
            )}
            {/* <Slider {...settings}>
              {homeBrowseCategoryFakeData.map(({ path, name, img }) => (
                <HomeBrowseCategory
                  name={name}
                  path={path}
                  key={uuid_v4()}
                  img={img}
                />
              ))}
            </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrowse;
