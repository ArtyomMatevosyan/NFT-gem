import { useRef } from "react";

import { v4 as uuid_v4 } from "uuid";

import { homeFaqData } from "./HomeFAQFakeData";
import HomeFAQItem from "./HomeFAQItem";

const HomeFAQ = () => {
  const faqRef = useRef<any>();

  return (
    <div className="homeFAQ" ref={faqRef}>
      <div className="homeFAQ__faqSection">
        <div className="homeFAQ__faqSection__container">
          <div className="homeFAQ__faqSection__container__data">
            <p>FAQ</p>
            {homeFaqData.map(({ answer, question }) => (
              <HomeFAQItem
                answer={answer}
                question={question}
                key={uuid_v4()}
                className="homeFAQ__faqSection"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
