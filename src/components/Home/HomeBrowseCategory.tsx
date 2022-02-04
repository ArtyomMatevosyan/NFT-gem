import { FC } from "react";

import { useHistory } from "react-router";

import { HomeBrowseCategoryProps } from "./model";

const HomeBrowseCategory: FC<HomeBrowseCategoryProps> = ({
  path,
  name,
  img,
}) => {
  const history = useHistory();
  return (
    <div className="homeBrowseCategory" onClick={() => history.push(path)}>
      <div>
        <img src={img} alt="nme" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default HomeBrowseCategory;
