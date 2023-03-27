import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms/todo";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  console.log({filter})
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <div  style={{marginTop: 30}}>
      필터링:
      <select value={filter} onChange={updateFilter}>
         <option value="Show All">All</option>
         <option value="Show Completed">Complete</option>
         <option value="Show Uncompleted">Uncomplete</option>
      </select>
    </div>
  );
};

export default TodoListFilters;
