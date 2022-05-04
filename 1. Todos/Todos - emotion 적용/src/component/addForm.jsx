import React, { useRef, useState } from 'react';
import Button from './element/Button';
import './addForm.css';
import styled from '@emotion/styled';

const AddFormWrap = styled.div`
  position: relative;
  display: flex;
`;

const AddInput = styled.input`
  display: inline-block;
  border-radius: 8px;
  border: 1px solid rgba(161, 155, 155, 0.5);
  box-shadow: 0 3px 6px 1px rgb(64 60 68 / 20%);
  font-size: 2rem;
  outline: none;
  padding: 5px 15px;
  color: #5a5959;
`;

// 버튼은 따로 컴포넌트화하기
const AllBtn = styled.button`
  position: absolute;
  top: -1px;
  right: 107px;
  margin-top: 4px;
`;

function AddFormItem({ addTodos, onAllDelTodos }) {
  const [Input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleAddTodos = e => {
    e.preventDefault();
    addTodos(Input.trim());

    setInput('');
    inputRef.current.focus();
  };

  return (
    <AddFormWrap>
      <form
        className="addTodosFrom"
        onSubmit={handleAddTodos}
      >
        <AddInput
          onChange={handleChange}
          type="text"
          placeholder="일정을 입력해주세요"
          ref={inputRef}
          value={Input}
        />
        <Button type="submit" onClick={handleAddTodos}>
          추가
        </Button>
      </form>
      <Button onClick={onAllDelTodos}>모두 삭제</Button>
    </AddFormWrap>
  );
}

export default AddFormItem;
