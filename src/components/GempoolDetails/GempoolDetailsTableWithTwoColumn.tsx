import { FC, useRef, useState } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/details/arrow.svg";

import { GempoolDetailsTableWithTwoColumnProps } from "./model";

const GempoolDetailsTableWithTwoColumn: FC<GempoolDetailsTableWithTwoColumnProps> =
  ({ data, title }) => {
    const copyToClipboard = (text: string) => {
      alert(`text: --> ${text} <-- was copied on clipboard`);
      navigator.clipboard?.writeText(text);
    };

    const claimRef = useRef<any>();

    const [isOpenClaims, setIsOpenClaims] = useState(false);

    const handleOpenClaims = () => {
      setIsOpenClaims(!isOpenClaims);
    };

    return (
      <div className={!isOpenClaims ? "claims" : "claimsOpen"}>
        <div className="claims__openClaims" onClick={handleOpenClaims}>
          <p>{title}</p>
          <div
            className={
              isOpenClaims
                ? "claims__openClaims--arrowIconClose"
                : "claims__openClaims--arrowIconOpen"
            }
          >
            <ArrowIcon />
          </div>
        </div>

        <div className={isOpenClaims ? "claims__table" : "claims__tableOpen"}>
          <div className="claims__table--headerPart">
            <p>Token Hash</p>
            <p>address</p>
          </div>
          {data.map((item) => (
            <div className="claims__table--items" key={item.id} ref={claimRef}>
              <p
                onClick={() => copyToClipboard(item.first)}
                className="claims__table--items--token"
              >
                {claimRef.current?.offsetWidth < 1100 &&
                claimRef.current?.offsetWidth > 875
                  ? item.first.split("").slice(0, 50).join("") + "..."
                  : claimRef.current?.offsetWidth < 875
                  ? item.first.split("").slice(0, 30).join("") + "..."
                  : item.first}
              </p>
              <p
                onClick={() => copyToClipboard(item.second)}
                className="claims__table--items--token"
              >
                {claimRef.current?.offsetWidth < 1100 &&
                claimRef.current?.offsetWidth > 875
                  ? item.second.split("").slice(0, 50).join("") + "..."
                  : claimRef.current?.offsetWidth < 875
                  ? item.second.split("").slice(0, 30).join("") + "..."
                  : item.second}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default GempoolDetailsTableWithTwoColumn;
