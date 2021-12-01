import { FC } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as CloseIcon } from "../../assets/searchResult/close.svg";
import {
  addTypeCollectionFilter,
  // setCollectionFilter,
} from "../../redux/features/marketplace/marketplaceSlice";

import { SelectedFilterProps } from "./model";

const SelectedFilter: FC<SelectedFilterProps> = ({
  className,
  textContent,
  children,
  id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveFilter = () => {
    dispatch(
      addTypeCollectionFilter({
        className: className,
        textContent: textContent,
        id: id,
      })
    );
  };

  return (
    <div
      className="searchResult__searchSection__selectedFilters--selectedFilter"
      onClick={() => console.log(id)}
    >
      <div>
        {children}
        <p>{textContent}</p>
      </div>
      <CloseIcon onClick={handleRemoveFilter} />
    </div>
  );
};

export default SelectedFilter;
