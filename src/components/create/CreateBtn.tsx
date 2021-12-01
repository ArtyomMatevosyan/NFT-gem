import { FC } from "react";

import { CreateBtnProps } from "./model";

const CreateBtn: FC<CreateBtnProps> = ({ text, onClick ,ref}) => {
  return (
    <div className="create__container--btnDiv" >
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default CreateBtn;
