import dayjs from "dayjs";

import { v4 } from "uuid";

export const todoData = [
  {
    id: v4().split("-").join(""),
    todo: "내과 진료",
    date: dayjs("2022-08-12").format("YYYY-MM-DD")
  },
  {
    id: v4().split("-").join(""),
    todo: "JS 공부하기",
    date: dayjs("2022-09-29").format("YYYY-MM-DD")
  },
  {
    id: v4().split("-").join(""),
    todo: "TS 공부하기",
    date: dayjs("2022-10-24").format("YYYY-MM-DD")
  },
  {
    id: v4().split("-").join(""),
    todo: "산책가기",
    date: dayjs("2022-11-25").format("YYYY-MM-DD")
  },
  {
    id: v4().split("-").join(""),
    todo: "영어 공부",
    date: dayjs("2022-11-28").format("YYYY-MM-DD")
  },
  {
    id: v4().split("-").join(""),
    todo: "시장 장보기",
    date: dayjs().format("YYYY-MM-DD")
  },
  {
    id: v4().split("-").join(""),
    todo: "학원가기",
    date: dayjs().format("YYYY-MM-DD")
  }
];
