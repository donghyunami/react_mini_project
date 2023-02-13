import React from 'react';

function TodoItem({ todo }) {
  const { text } = todo;
  return <li>{text}</li>;
}

export default TodoItem;
