import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "../store/fontState";

const Button = ({ children }) => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button
      onClick={(e) => {
        setFontSize(fontSize + 1);
      }}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
