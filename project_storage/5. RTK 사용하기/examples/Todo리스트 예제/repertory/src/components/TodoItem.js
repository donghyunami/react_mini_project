import React from "react";
import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";
import { MdDone, MdDelete } from "react-icons/md";
import { deleteTodo, toggleTodo } from "../redux/slices/todos";
import { useDispatch } from "react-redux";

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px; /* 원형으로 만드려면 16px나 50% 설정 */
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ item }) {
  const { id, todo, done } = item;
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleTodo(id));

  const onRemove = (e) => {
    if (!done) {
      alert("아직 완료되지 않은 일정입니다.");
      return;
    }

    const isConfirmDel = window.confirm("정말로 삭제하실건가요");
    isConfirmDel && dispatch(deleteTodo(id));
  };
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{todo}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
