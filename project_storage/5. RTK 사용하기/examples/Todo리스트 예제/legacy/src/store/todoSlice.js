import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: '산책가기', done: true },
  { id: 2, text: '코딩하기', done: true },
  { id: 3, text: '목욕하기', done: false },
];

let id = 4;
// 리듀서 ===> createSlice를 사용
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const nextId = id++;
      state.push({ id: nextId, text: action.payload, done: false });
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
