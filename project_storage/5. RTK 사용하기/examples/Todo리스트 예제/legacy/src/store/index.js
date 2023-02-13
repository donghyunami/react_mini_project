import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  // middleware, devtool 등 추가 가능
});

console.log(todoSlice.actions);
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default store;
