import { createSlice } from "@reduxjs/toolkit";
import _remove from "lodash/remove";

const initialState = [
  {
    id: 1,
    todo: "리액트 공부하기",
    done: true,
  },
  {
    id: 2,
    todo: "TypeScript 공부하기",
    done: true,
  },
  {
    id: 3,
    todo: "강아지 산책시키기",
    done: false,
  },
  {
    id: 4,
    todo: "독서하기",
    done: false,
  },
];

let nextId = 5;

const todoSlice = createSlice({
  name: "todos", //action ex) todos/addTodo
  initialState,
  reducers: {
    addTodo: {
      prepare(todo) {
        const id = nextId++;
        return { payload: { id, todo, done: false } };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    toggleTodo: {
      reducer(state, action) {
        // const todo = state.find((todo) => todo.id === action.payload);

        // if (todo) {
        //   todo.done = !todo.done;
        // }

        state.forEach(
          (todo) => todo.id === action.payload && (todo.done = !todo.done)
        );
      },
    },
    deleteTodo: {
      reducer(state, action) {
        _remove(state, (s) => s.id === action.payload);
      },
    },
  },
});

export const getTodos = (state) => state.todos; //slice name으로 접근
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice;
