import { FC } from "react";

import { ReactComponent as PlusIcon } from "../../assets/create/plusIcon.svg";

import { CreateLootSectionProps } from "./model";

const CreateLootSection: FC<CreateLootSectionProps> = ({
  data,
  // createBtnText,
}) => {
  return (
    <div className="create__container__lootSection">
      <div className="create__container__lootSection--loots">
        <select name="loot" id="">
          {data?.map((item) => (
            <option value="">{item.text}</option>
          ))}
        </select>

        <div className="create__container__lootSection--loots--createLoot">
          {/* {createBtnText} */}
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default CreateLootSection;


// "https://nftgem-marketplace.herokuapp.com/create/lootbox "