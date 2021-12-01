export type AboutCategoryProps = {
  aboutCategoryData: AboutCategoryDataType;
  data: AboutCategoryPropsDataType[];
};

type AboutCategoryDataType = {
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
};

type AboutCategoryPropsDataType = {
  imgUrl: string;
  title: string;
  description: string;
};

export type AboutCategoryActionProps = {
  imgUrl: string;
  title: string;
  description: string;
};
