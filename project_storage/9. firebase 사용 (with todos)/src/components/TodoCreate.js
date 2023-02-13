import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todos";
import { fetchGetTodos } from "../service/todos";
// import { useTodoDispatch, useTodoNextId } from "./TodoContext";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hvoer {
    background: #63e6db;
  }
  &:active {
    background: #20c977;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  /* transform: translate(좌/우, 상/하); */

  font-size: 60px;
  color: #fff;
  border-radius: 40px;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const {id, todo} = await fetchGetTodos({todo: value});
      console.log({id, todo})
      dispatch(addTodo(value));
    } catch (err) {
      console.error(err);
    }
     
    setValue("");
    setOpen(false); // 입력완료할 때 create 폼 닫기
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할 일을 입력한 후, Enter를 누르세요"
              autoFocus
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
