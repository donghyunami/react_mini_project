import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../atoms/todo";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum} </li>
      <li>Items not completed: {totalUnCompletedNum} </li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
