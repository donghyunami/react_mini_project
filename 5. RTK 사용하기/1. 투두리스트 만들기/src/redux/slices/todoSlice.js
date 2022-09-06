import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const nextId = uuidv4;

const initialState = [
  { id: nextId(), text: '산책가기', done: true },
  { id: nextId(), text: '코딩하기', done: true },
  { id: nextId(), text: '목욕하기', done: false },
];

// 리듀서 ===> createSlice를 사용
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextId(), text: action.payload, done: false });
    },
    toggleTodo(state, action) {
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    },
    removeTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export default todoSlice;
