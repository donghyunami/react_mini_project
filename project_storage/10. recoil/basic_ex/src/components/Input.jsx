import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { textState } from "../store/fontState";

const InputText = () => {
  const text = useRecoilValue(textState);
  const setText = useSetRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" name="username" onInput={onChange} value={text}/>
    </div>
  );
};

export default InputText;
