import { ReactComponent as AboutIcon } from "../../assets/about/AboutIcon.svg";
import AboutUsIcon from "../../assets/about/AboutUsIcon.png";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs__upperPart">
        <div className="aboutUs__upperPart__content">
          <div className="aboutUs__upperPart__content__infoPart">
            <p className="aboutUs__upperPart__content__infoPart--title">
              about
            </p>
            <p className="aboutUs__upperPart__content__infoPart--info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque amet vel facilisis imperdiet mi pellentesque
              tincidunt turpis.
            </p>
          </div>
          <div className="aboutUs__upperPart__content__photo">
            <AboutIcon />
          </div>
        </div>
      </div>
      <div className="aboutUs__mainInfo">
        <div className="aboutUs__mainInfo__content">
          <img src={AboutUsIcon} alt="" />
          <div className="aboutUs__mainInfo__content__textPart">
            <p className="aboutUs__mainInfo__content__textPart--title">about</p>
            <p className="aboutUs__mainInfo__content__textPart--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla scelerisque orci, enim morbi tellus mauris. Nam sit
              tincidunt at sagittis sem enim ut nunc maecenas. Elit morbi libero
              sem quam porttitor platea nunc eget. Morbi in imperdiet amet at
              et. Facilisis et, nisl, mattis tellus sapien sit placerat pulvinar
              fermentum.
            </p>
            <p className="aboutUs__mainInfo__content__textPart--text">
              Aliquam odio enim hendrerit neque eget. Id nunc consectetur enim
              lectus orci quisque sed. Massa ornare rutrum aliquet suspendisse
              tempor blandit nec. Tristique nunc, eget molestie tortor viverra
              aliquam. Nullam ac lectus interdum sapien non non ac sagittis
              pellentesque. Malesuada faucibus vestibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
