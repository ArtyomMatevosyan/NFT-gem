import { FC } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as ImageIcon } from "../../assets/create/imgIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/wallet/close.svg";
import { changeProgress } from "../../redux/features/create/createSlice";
import CreateBtn from "../create/CreateBtn";
import CreateFormSectionDescription from "../create/CreateFormSectionDescription";
import CreateFormSectionLabel from "../create/CreateFormSectionLabel";
import CreateTitle from "../create/CreateTitle";

import { CreateLootProps } from "./model";

const CreateLoot: FC<CreateLootProps> = ({
  closeModal,
  title,
  secondInputHide,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeProgress(2));
  };
  return (
    <div className="createLoot__modal">
      <div className="createLoot">
        <div className="createLoot--closeDiv" onClick={closeModal}>
          <CloseIcon />
        </div>
        <div className="createLoot__container">
          <div className="createLoot__container--title">
            <CreateTitle text={title} />
          </div>
          <div className="createLoot__container__imgSection">
            <span>Logo image*</span>
            <p>
              This image will also be used for navigation. 350 x 350
              recommended.
            </p>
            <div className="createLoot__container__imgSection--imgDiv">
              <div className="createLoot__container__imgSection--imgDiv--wrapper">
                <ImageIcon />
              </div>
            </div>
          </div>
          <div className="createLoot__container__formSection">
            <CreateFormSectionLabel
              name="name"
              type="text"
              // text="Name*"
              placeholder="My Awesome Loot"
            />
            <CreateFormSectionLabel
              name="probability"
              type="text"
              // text="Probability*"
              placeholder="45%"
              hide={secondInputHide}
            />
            <CreateFormSectionDescription
              title="Description"
              rows={secondInputHide ? 9 : 3}
              cols={66}
            />
          </div>
          <CreateBtn text="Create" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default CreateLoot;
