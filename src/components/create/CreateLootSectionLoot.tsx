import { FC } from "react";

// import { ReactComponent as CarbonUser } from "../../assets/create/carbonUser.svg";

import { CreateLootSectionLootProps } from "./model";

const CreateLootSectionLoot: FC<CreateLootSectionLootProps> = ({ text }) => {
  return (
    <div className="create__container__lootSection--loots--loot">
      {/* <div className="create__container__lootSection--loots--loot--imgDiv">
        <CarbonUser />
      </div> */}
      <p>{text}</p>
    </div>
  );
};

export default CreateLootSectionLoot;
