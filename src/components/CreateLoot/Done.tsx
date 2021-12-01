import { FC } from "react";

import { ReactComponent as FacebookIcon } from "../../assets/create/facebook.svg";
import { ReactComponent as ImageIcon } from "../../assets/create/imgIcon.svg";
import { ReactComponent as LinkChain } from "../../assets/create/linkChain.svg";
import { ReactComponent as TelegramIcon } from "../../assets/create/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/create/twitter.svg";
import { ReactComponent as CloseIcon } from "../../assets/wallet/close.svg";

import { DoneProps } from "./model";

const Done: FC<DoneProps> = ({ closeModal }) => {
  return (
    <div className="done__modal">
      <div className="done">
        <div className="done--closeDiv" onClick={closeModal}>
          <CloseIcon />
        </div>
        <div className="done__header">
          <span>Done</span>
          <p>Great! You just created - Item Name</p>
        </div>
        <div className="done__imageSection">
          <div className="done__imageSection__wrapper">
            <div className="done__imageSection__wrapper--imgDiv">
              <ImageIcon />
            </div>
            <p>Photo</p>
          </div>
        </div>
        <div className="done__share">
          <p>Share</p>
          <div className="done__share__socialDiv">
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://telegram.org/">
              <TelegramIcon />
            </a>
            <button>
              <LinkChain />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
