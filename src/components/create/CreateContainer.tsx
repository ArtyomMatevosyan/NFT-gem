import { useRef } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as LootboxIconSmall } from "../../assets/create/lootboxIconSmall.svg";
import { changeProgress } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";
import CreateLoot from "../CreateLoot/CreateLoot";
import Done from "../CreateLoot/Done";

import CreateBlockchainSection from "./CreateBlockchainSection";
import CreateBtn from "./CreateBtn";
import CreateFormSectionDescription from "./CreateFormSectionDescription";
import CreateFormSectionLabel from "./CreateFormSectionLabel";
import CreateImgSection from "./CreateImgSection";
import CreateLootSection from "./CreateLootSection";
import CreateTitle from "./CreateTitle";
import { lootboxFakeData } from "./lootboxFakeData";

const CreateContainer = () => {
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
            <CreateTitle text="Create new Lootbox">
              <LootboxIconSmall />
            </CreateTitle>
            <CreateImgSection />
            <div className="create__container__formSection">
              <CreateFormSectionLabel
                name="name"
                type="text"
                // text="Name*"
                placeholder="Name"
              />
              <CreateFormSectionLabel
                name="openPrice"
                type="text"
                // text="Open Price"
                placeholder="Enter location"
              />
              <div className="create__container__formSection--minMaxDiv">
                <CreateFormSectionLabel
                  name="minimum"
                  type="text"
                  // text="Minimum Loot Awarded"
                  placeholder="1"
                />
                <CreateFormSectionLabel
                  name="maximum"
                  type="text"
                  // text="Maximum Loot Awarded"
                  placeholder="3"
                />
              </div>
              <CreateFormSectionLabel
                name="maximumOpens"
                type="text"
                // text="Maximum Opens"
                placeholder="100"
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
              // title="Loot"
              // description="The is the pool of items that the lootbox will award to openers"
              data={lootboxFakeData}
              // createBtnText="+ Create loot"
            />
            <CreateBlockchainSection />
            <CreateBtn text="Create" onClick={handleClick} />
          </div>
        </div>
      </div>
      {progress === 1 ? (
        <CreateLoot closeModal={closeModal} title="Create loot" />
      ) : progress === 2 ? (
        <Done closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default CreateContainer;
