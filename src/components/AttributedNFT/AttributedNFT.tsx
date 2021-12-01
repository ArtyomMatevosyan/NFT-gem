import { useRef } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { changeProgress } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";
import CreateBlockchainSection from "../create/CreateBlockchainSection";
import CreateBtn from "../create/CreateBtn";
import CreateFormSectionDescription from "../create/CreateFormSectionDescription";
import CreateFormSectionLabel from "../create/CreateFormSectionLabel";
import CreateImgSection from "../create/CreateImgSection";
import CreateLootSection from "../create/CreateLootSection";
import CreateTitle from "../create/CreateTitle";
import CreateLoot from "../CreateLoot/CreateLoot";
import Done from "../CreateLoot/Done";

const AttributedNFT = () => {
  const attributedNFTfakeData = [
    {
      text: "Strength",
      id: 1,
    },
    {
      text: "Stamina",
      id: 2,
    },
    {
      text: "Charisma",
      id: 3,
    },
  ];

  const { progress } = useAppSelector(
    ({ createData }) => ({ progress: createData.progress }),
    shallowEqual
  );
  const lootRef = useRef<any>(null);
  const createBtnRef = useRef<any>();

  const executeScroll = () =>
    lootRef.current?.scrollIntoView({ block: "start" });
  const executeBtnScroll = () =>
    createBtnRef.current?.scrollIntoView({ block: "start" });

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeProgress(1));
    executeScroll();
  };

  const closeModal = () => {
    dispatch(changeProgress(0));
    executeBtnScroll();
  };

  return (
    <>
      <div className="create--scroll" ref={lootRef}></div>
      <div className={progress !== 0 ? "create--blur" : "create"}>
        <div className="create__container--size">
          <div className="create__container">
            <CreateTitle text="Create new attributed NFT" />
            <CreateImgSection />
            <div className="create__container__formSection">
              <CreateFormSectionLabel
                name="name"
                type="text"
                // text="Name*"
                placeholder="Item Name"
              />
              <CreateFormSectionLabel
                name="salePrice"
                type="text"
                // text="Sale Price"
                placeholder="Enter location"
              />
              <CreateFormSectionLabel
                name="maximumMint"
                type="text"
                // text="Maximum Mint"
                placeholder="1"
              />
              <CreateFormSectionDescription
                title="Description"
                rows={10}
                cols={74}
                description="The description will be included on the NFT staking page next to staking pool information"
              />
            </div>
            <div ref={createBtnRef}></div>{" "}
            {/* empty div for closing modal and continiue from current position */}
            <CreateLootSection
              // title="Attributes"
              // description="Define the attributes that your NFT will possess. All attribute values are determined on NFT minting."
              data={attributedNFTfakeData}
              // createBtnText="+ Create loot"
            />
            <CreateBlockchainSection />
            <CreateBtn text="Create" onClick={handleClick} />
          </div>
        </div>
      </div>
      {progress === 1 ? (
        <CreateLoot
          closeModal={closeModal}
          title="Create prize"
          secondInputHide="hide"
        />
      ) : progress === 2 ? (
        <Done closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default AttributedNFT;
