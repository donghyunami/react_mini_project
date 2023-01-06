import { useSelector, useDispatch } from "react-redux";
import { getCount, increment } from "../redux/slices/counter";
import Styles from "./counter.module.css";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <div className={Styles.counter}>
      <button
        onClick={() => {
          dispatch(increment(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

export default Counter;
