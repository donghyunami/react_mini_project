import { useRef, useState } from 'react';
import Button from './element/Button';

function TodoItem({ todo, delTodo, updateTodo }) {
  const [NewTodo, setNewTodo] = useState('');
  const [Change, setChange] = useState(false);
  const inputRef = useRef(null);

  const handleDelTodo = () => {
    const ok = window.confirm('정말로 삭제하시겠습니까?');
    ok && delTodo(todo);
  };

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const toggleBtn = () => {
    setChange(!Change);
    
    if (Change) {
      /* 적용 버튼일 때 */
      console.log('적용');
      
      if (NewTodo) {
        updateTodo(todo, NewTodo);
      } else {
        let ok = window.confirm('입력해주세요!');
        ok ? setChange(true) : setChange(false);
      }

      setNewTodo('');
    } else {
      /* 수정 버튼일 때 */
      console.log('수정');
    }
  };
  return (
    <li>
      {Change ? (
        <input
          type='text'
          placeholder={todo.todo}
          onChange={handleChange}
          value={NewTodo}
          ref={inputRef}
        />
      ) : (
        <span>{todo.todo}</span>
      )}
      <Button onClick={toggleBtn}>{Change ? '적용' : '수정'}</Button>
      <Button onClick={handleDelTodo}>삭제</Button>
    </li>
  );
}

export default TodoItem;
