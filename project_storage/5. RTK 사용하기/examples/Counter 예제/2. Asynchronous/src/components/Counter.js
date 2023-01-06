import { useSelector, useDispatch } from "react-redux";
import { asyncIncreamentCount } from "../redux/actions/counter";
import { getCount, getStatus, increament } from "../redux/slices/counter";
import Styles from "./counter.module.css";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  const status = useSelector(getStatus)

  return (
    <div className={Styles.counter}>
      <button
        onClick={() => {
          dispatch(increament(2));
        }}
      >
        +
      </button>
      <button onClick={() => {
        dispatch(asyncIncreamentCount());
      }}> + async fetch</button>
      <div>
        {count} | {status}
      </div>
    </div>
  );
}

export default Counter;
