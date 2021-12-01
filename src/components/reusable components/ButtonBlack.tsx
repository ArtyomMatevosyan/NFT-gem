import { FC } from "react";

import { BlackButtonProps } from "./model";

const ButtonBlack: FC<BlackButtonProps> = ({ className, text }) => {
  return (
    <div className={`${className}__btn__container--div--black`}>
      <button>{text}</button>
    </div>
  );
};

export default ButtonBlack;
    