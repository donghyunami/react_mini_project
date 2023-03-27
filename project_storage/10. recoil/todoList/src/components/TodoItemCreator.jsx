import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todo";

const TodoItemCreator = () => {
  const [inputValue, setInputVavlue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (event) => {
    setInputVavlue(event.target.value);
  };

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputVavlue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
// 고유한 id 생성을 위한 유틸리티
function getId() {
  return id++;
}
export default TodoItemCreator;
