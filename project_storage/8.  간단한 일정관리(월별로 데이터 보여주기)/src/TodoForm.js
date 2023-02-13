import dayjs from "dayjs";
import { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";

function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onChangeTodo = ({ target: { value } }) => {
    setTodo(value);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    const todoItemObj = {
      id: v4().split("-").join(""),
      todo,
      date: dayjs().format("YYYY-MM-DD")
    };
    onAddTodo(todoItemObj);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <form className="todoForm" onSubmit={handleTodo}>
      <input ref={inputRef} onChange={onChangeTodo} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
