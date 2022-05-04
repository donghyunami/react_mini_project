import AddFormItem from './addForm';
import TodoItem from './todoItem';
import './todos.css';

function TodoList({ todos, onAdd, onDel, onallDel, onUpdtate }) {
  return (
    <div className='TodoList'>
      <AddFormItem addTodos={onAdd} onAllDelTodos={onallDel} />
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} delTodo={onDel} updateTodo={onUpdtate} />
          ))
        ) : (
          <div className="no-todos">일정이 비어있습니다.</div>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
