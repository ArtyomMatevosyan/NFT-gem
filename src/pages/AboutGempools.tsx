import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryFakeDataGempool } from "../components/About Category/aboutCategoryFakeData";
import { actionsFakeDataGempools } from "../components/About Category/actionFakeData";

const AboutGempools = () => {
  return (
    <>
      <AboutCategory
        aboutCategoryData={aboutCategoryFakeDataGempool}
        data={actionsFakeDataGempools}
      />
    </>
  );
};

export default AboutGempools;
