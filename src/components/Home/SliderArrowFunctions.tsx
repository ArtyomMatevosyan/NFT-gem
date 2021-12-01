import { ReactComponent as Prev } from "../../assets/home/left-arrow.svg";
import { ReactComponent as Next } from "../../assets/home/right-arrow.svg";

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <Prev />
  </button>
);

export const SlickArrowRight = ({
  currentSlide,
  slideCount,
  ...props
}: any) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <Next />
  </button>
);
