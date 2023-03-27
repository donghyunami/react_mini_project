import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todo";

const TodoItem = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === todo);

  const editItemText = ({ target: { value } }) => {
    const newTodo = replaceItemAtItem(todoList, index, {
      ...todo,
      text: value,
    });

    setTodoList(newTodo);
  };

  const toggleItemCompletion = () => {
    const updateTodo = replaceItemAtItem(todoList, index, {
      ...todo,
      isComplete: !todo.isComplete,
    });

    setTodoList(updateTodo);
  };

  const uploadItem = () => {
    setEditMode((prev) => !prev);
  };
  const deleteItem = () => {
    const delTodo = removeItemAtItem(todoList, index);
    setTodoList(delTodo);
  };

  return (
    <div>
      <input
        type="text"
        disabled={todo.isComplete}
        value={todo.text}
        readOnly={editMode ? false : true}
        onChange={editItemText}
      />
      <input type="checkbox" checked={todo.isComplete} onChange={toggleItemCompletion} />
      {!todo.isComplete && (
        <button onClick={uploadItem} title="수정하기">
          {editMode ? "완료" : "✍"}
        </button>
      )}
      <button onClick={deleteItem} title="삭제하기">
        ❌
      </button>
    </div>
  );
};

function replaceItemAtItem(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtItem(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
