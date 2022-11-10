import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices';

import './createTodo.css';

function CreateTodo() {
  const [inputText, setInputText] = useState('');
  const inputRef = useRef();

  const dispatch = useDispatch();
  const handleForm = e => {
    e.preventDefault();
    dispatch(addTodo(inputText));

    setInputText('');
    inputRef.current.focus();
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputText(value);
  };
  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        value={inputText}
        placeholder="일정 추가하기"
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default CreateTodo;
