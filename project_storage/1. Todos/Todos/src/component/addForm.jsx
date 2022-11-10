import React, { useRef, useState } from 'react';
import Button from './element/Button';
import './addForm.css';

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
    <div className="addFromWrap">
      <form className='addTodosFrom' onSubmit={handleAddTodos}>
        <input
          onChange={handleChange}
          type='text'
          placeholder='일정을 입력해주세요'
          ref={inputRef}
          value={Input}
        />
        <Button type='submit' onClick={handleAddTodos}>
          추가
        </Button>
      </form>
      <Button onClick={onAllDelTodos}>모두 삭제</Button>
    </div>
  );
}

export default AddFormItem;
