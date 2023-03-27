import { useRecoilValue } from "recoil";
import TodoListFilters from "./components/TodoListFilters";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import { filteredTodoListState } from "./atoms/todo";
import TodoListStats from "./components/TodoListStats";
import CurrentUserInfo from "./components/CurrentUserInfo";
import { Suspense } from "react";

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log({ filteredTodoList });
  
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <CurrentUserInfo />
      </Suspense>
      <TodoListStats />
      <TodoItemCreator />
      <TodoListFilters />
      {filteredTodoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
