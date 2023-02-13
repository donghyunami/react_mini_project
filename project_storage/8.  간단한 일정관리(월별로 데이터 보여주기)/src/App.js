import { useEffect, useState } from "react";
import "./styles.css";
import dayjs from "dayjs";
import { todoData } from "./fake/todoData";
import TodoForm from "./TodoForm";
var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

export default function App() {
  const [curDate, setCurDate] = useState(dayjs());
  const [today] = useState(dayjs().format("YYYY-MM"));
  const [data, setData] = useState([]);
  // console.log('getTime():', curDate.toDate().getTime())
  // console.log("1주후", curDate.weekday(7).format());
  // console.log("1주전", curDate.weekday(-7).format());
  // const currentDate = `${curDate.year()}년 ${curDate.month() + 1}월`;

  useEffect(() => {
    const startOfDate = dayjs(curDate).startOf("month").format("YYYYMMDD");
    const endOfDate = dayjs(curDate).endOf("month").format("YYYYMMDD");

    const thisMonthDate = todoData.filter((item) => {
      const date = parseInt(item.date.split("-").join(""), 10);
      if (Number(startOfDate) <= date && date <= Number(endOfDate)) {
        return item;
      }
    });
    setData(thisMonthDate.reverse());
  }, [curDate]);

  const currentDate = `${curDate.year()}년 ${
    curDate.month() < 9 ? "0" + (curDate.month() + 1) : curDate.month() + 1
  }월`;

  const increamentDate = () => {
    const today_ = Number(today.split("-").join(""));
    const curDate_ = Number(curDate.format("YYYY-MM").split("-").join(""));
    if (today_ <= curDate_) return;
    setCurDate(curDate.add(1, "month"));
  };
  const decreamentDate = () => {
    setCurDate(curDate.subtract(1, "month"));
  };

  const onAddTodo = (newTodoObj) => {
    const newTodo = [newTodoObj, ...data];
    setData(newTodo);
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const thisMonthTodoCount = () => data.length;
  return (
    <>
      <div className="dateCtrl">
        <div className="ctrlBtn">
          <button onClick={decreamentDate}>&lt;</button>
        </div>
        <div className="dateText">
          <span>{currentDate}</span>
          <span
            style={{
              paddingLeft: 12
            }}
          >
            (count: {thisMonthTodoCount()})
          </span>
        </div>
        <div className="ctrlBtn">
          <button onClick={increamentDate}>&gt;</button>
        </div>
      </div>
      <div className="todoFromContainer">
        <TodoForm onAddTodo={onAddTodo} />
      </div>
      <div className="todos">
        {data.length === 0 && <div>기록된 사항이 없습니다.</div>}
        {data.map(({ todo, date, id }) => (
          <div className="todoItem" key={id}>
            <span className="ctn-todo">{todo}</span>
            <span className="ctn-date">({date})</span>
          </div>
        ))}
      </div>
    </>
  );
}
