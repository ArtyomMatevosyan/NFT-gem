import { FC, useRef, useState } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/details/arrow.svg";

import { GempoolDetailsTableWithThreeColumnProps } from "./model";

const GempoolDetailsTableWithThreeColumn: FC<GempoolDetailsTableWithThreeColumnProps> =
  ({ data, title }) => {
    const copyToClipboard = (text: string) => {
      alert(`text: ${text} was copied on clipboard`);
      navigator.clipboard?.writeText(text);
    };
    const claimRef = useRef<any>();

    const [isOpenTable, setIsOpenTable] = useState(false);

    const handleOpenTable = () => {
      setIsOpenTable(!isOpenTable);
    };
    return (
      <div className={!isOpenTable ? "table" : "tableOpen"}>
        <div className="table__title" onClick={handleOpenTable}>
          <p>{title}</p>
          <div
            className={
              isOpenTable
                ? "table__title--arrowIconClose"
                : "table__title--arrowIconOpen"
            }
          >
            <ArrowIcon />
          </div>
        </div>
        <div className={isOpenTable ? "table__content" : "table__contentOpen"}>
          <div className="table__content__headerPart">
            <p className="table__content__headerPart--firstColumn">
              Token Hash
            </p>
            <p className="table__content__headerPart--secondColumn">
              Numbering
            </p>
            <p className="table__content__headerPart--thirdColumn">
              Total Supply
            </p>
          </div>
          {data.map((item) => (
            <div className="table__content__items" key={item.id} ref={claimRef}>
              <p
                className="table__content__items--first"
                onClick={() => copyToClipboard(item.first)}
              >
                {claimRef.current?.offsetWidth <= 1000 &&
                claimRef.current?.offsetWidth > 770
                  ? item.first.split("").slice(0, 50).join("") + "..."
                  : claimRef.current?.offsetWidth <= 770
                  ? item.first.split("").slice(0, 30).join("") + "..."
                  : item.first}
              </p>
              <p className="table__content__items--second">{item.second}</p>
              <p className="table__content__items--third">{item.third}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default GempoolDetailsTableWithThreeColumn;
