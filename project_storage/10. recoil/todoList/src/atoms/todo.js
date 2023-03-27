import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todo = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return todo.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return todo.filter((item) => !item.isComplete);
      default:
        return todo;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState ",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUnCompletedNum = todoList.filter((item) => !item.isComplete).length;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
      percentCompleted,
    };
  },
});
