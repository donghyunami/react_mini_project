import React, { useState } from 'react';
// import Footer from './component/footer';
import TodoList from './components/todos';
import Nav from './components/nav';

function App(props) {
  const [Todos, setTodos] = useState([
    { id: 1, todo: '산책하기', count: 0 },
    { id: 2, todo: '코딩하기', count: 0 },
    { id: 3, todo: '영어공부하기', count: 0 },
  ]);

  // 일정 추가
  const addTodos = newTodo => {
    if (newTodo) {
      const todos = [
        ...Todos,
        { id: Todos.length + 1, todo: newTodo, count: 0 },
      ];
      setTodos(todos);
    } else {
      alert('일정을 입력해주세요 😅');
    }
  };

  // 일정 삭제
  const delTodos = selectedTodo => {
    const todos = Todos.filter(
      todo => selectedTodo.id !== todo.id,
    );
    setTodos(todos);
  };

  // 일정 모두 삭제
  const allDelTodos = () => {
    if (Todos.length > 0) {
      const todos = Todos.filter(todo => !todo);
      const ok = window.confirm(
        '정말로 모든 일정을 삭제하시겠습니까?',
      );
      ok && setTodos(todos);
    } else {
      alert('삭제할 일정이 없습니다.');
    }
  };
  // 일정 수정
  const updateTodos = (selectedTodo, newText) => {
    const todos = Todos.map(todo => {
      if (selectedTodo.id === todo.id) {
        // 각 요소중 해당 조건이 만족할 때, 해당 요소 변경
        console.log(selectedTodo.id === todo.id);
        return { ...todo, todo: newText };
      }
      return todo;
    });
    setTodos(todos);
  };

  return (
    <div>
      <Nav />
      <TodoList
        todos={Todos}
        onAdd={addTodos}
        onDel={delTodos}
        onallDel={allDelTodos}
        onUpdtate={updateTodos}
      />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
