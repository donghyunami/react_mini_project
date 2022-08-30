import { combineReducers } from '@reduxjs/toolkit';

import todoSlice from '../slices/todoSlice';

const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});

console.log(todoSlice.actions);
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default rootReducer;
