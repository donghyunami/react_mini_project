import React from "react";
import { useResetRecoilState, useRecoilValue  } from "recoil";
import Button from "./components/Button";
import InputText from "./components/Input";
import Text from "./components/Text";
import { fontSizeState, textLengthState } from "./store/fontState";

const App = () => {
  const resetFontSize = useResetRecoilState(fontSizeState);
  const textLength = useRecoilValue(textLengthState);
  const fontSize = useRecoilValue(fontSizeState);
  return ( 
    <div className="App">
       <InputText/>
       <Button>글자크기 변경</Button>
       <button onClick={resetFontSize}>글자 크기 초기화</button>
       <Text/>
       <p>글자 크기: {fontSize}</p>
       <p>글자 수: {textLength}</p>
    </div>
  );
};

export default App;
