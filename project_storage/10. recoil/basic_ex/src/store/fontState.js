import { atom, selector } from "recoil";

export const fontSizeState = atom({
  key: "fontSizeState",
  default: 16,
});

export const textState = atom({
  key: "textState",
  default: "",
});

export const textLengthState = selector({
  key: 'textLengthState ',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});