import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/slices';

function TodoItem({ todo }) {
  const { text } = todo;
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    const selectedId = todo.id;
    dispatch(removeTodo(selectedId));
  };

  const handleCompletedTodo = () => {
    const selectedId = todo.id;
    dispatch(toggleTodo(selectedId));
  };

  return (
    <li
      style={{
        margin: '15px',
        cursor: 'pointer',
      }}
    >
      <span>
        <span
          onClick={handleCompletedTodo}
          className={`todo ${todo.done && 'active'}`}
        >
          {text}
        </span>
        <button onClick={handleRemoveTodo}>삭제</button>
      </span>
    </li>
  );
}

export default TodoItem;
