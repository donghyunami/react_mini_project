import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <header>
        <h1>일정 관리</h1>
        <CreateTodo />
      </header>
      <br />
      <main>
        <Todos />
      </main>
    </div>
  );
}

export default App;
