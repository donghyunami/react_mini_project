import { collection, addDoc, updateDoc } from "firebase/firestore";
import { dbService } from "../fbase";

const todosRef = collection(dbService, "todos");

export const fetchGetTodos = async (data) => {
  try {
    const res = await addDoc(todosRef, data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const fetchUpdateTodo = async (data) => {
  try {
      const res = await updateDoc(todosRef, {
      todo: data,
    });
    return res;
  } catch(err) {
    console.error(err);
  } 

};

export const fetchDeleteTodo = async () => {};

export const fetchGetTodoById = async () => {};

export const fetchPostTodo = async () => {};
