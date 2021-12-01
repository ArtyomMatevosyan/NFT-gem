import { FC } from "react";

import { WhiteButtonProps } from "./model";

const ButtonWhite: FC<WhiteButtonProps> = ({ text, className }) => {
  return (
    <div className={`${className}__btn__container--div--white`}>
      <button>{text}</button>
    </div>
  );
};

export default ButtonWhite;
