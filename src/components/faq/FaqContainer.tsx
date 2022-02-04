import { v4 as uuid_v4 } from "uuid";

import QuestionIcon from "../../assets/faq/question.png";
import { homeFaqData } from "../Home/HomeFAQFakeData";
import HomeFAQItem from "../Home/HomeFAQItem";

const FaqContainer = () => {
  return (
    <div className="faq">
      <div className="faq__upperPart">
        <div className="faq__upperPart__textSection">
          <span>FAQ</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque amet vel facilisis imperdiet mi pellentesque tincidunt
            turpis. consectetur adipiscing elit. Pellentesque amet vel facilisis
            imperdiet mi pellentesque tincidunt turpis.
          </p>
        </div>
        <img src={QuestionIcon} alt="/" />
      </div>
      <div className="faq__faqSection">
        <div className="faq__faqSection__container">
          <div className="faq__faqSection__container__data">
            <p>FAQ</p>
            {homeFaqData.map((item) => (
              <HomeFAQItem
                answer={item.answer}
                question={item.question}
                key={uuid_v4()}
                className="faq__faqSection"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
