import { useRecoilState, useRecoilValue } from "recoil";
import { fontSizeState, textState } from "../store/fontState";

function Text() {
  const [fontSize] = useRecoilState(fontSizeState);
  const text = useRecoilValue(textState);
  return <p style={{ fontSize }}>{text}</p>;
}

export default Text;
