import React, { useEffect } from "react";
import styled from "@emotion/styled";
import TodoItem from "./TodoItem";
// import { useTodoState } from './TodoContext';
import { useSelector } from "react-redux";
import { getTodos } from "../redux/slices/todos";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto; /* 컨텐츠가 넘치는 경우 자동 스크롤 */
`;

function TodoList() {
  const todos = useSelector(getTodos);
  console.log(todos)
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
