import { NavLink } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";

import { homeFaqData } from "./HomeFAQFakeData";
import HomeFAQItem from "./HomeFAQItem";

const HomeFAQ = () => {
  return (
    <div className="homeFAQ">
      <div className="homeFAQ__container">
        <div className="homeFAQ__container--title">FAQ</div>
        <div className="homeFAQ__container__data">
          {homeFaqData.map((item) => (
            <HomeFAQItem
              question={item.question}
              key={uuid_v4()}
              className="homeFAQ"
            />
          ))}
        </div>
        <div className="homeFAQ__container--btnDiv">
          <NavLink to="/faq">
            <button>See more</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
