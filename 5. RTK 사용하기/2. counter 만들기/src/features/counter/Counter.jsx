import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByUser,
  resetCount,
} from './counterSlice';

const Counter = () => {
  const getCount = useSelector(state => state.count);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const incrementByUserNum = () => {
    dispatch(incrementByUser(Number(inputRef.current.value | 0)));
  };

  useEffect(() => {
    inputRef && (inputRef.current.value = 0);
  }, []);

  return (
    <div>
      <div className="counterForm">
        <input type="number" ref={inputRef} />
        <button
          onClick={e => {
            dispatch(increment());
          }}
        >
          증가
        </button>
        <button
          onClick={e => {
            dispatch(decrement());
          }}
        >
          감소
        </button>
        <button onClick={incrementByUserNum}>사용자 증가</button>
        <button
          onClick={e => {
            inputRef.current.value = 0;
            dispatch(resetCount());
          }}
        >
          초기화
        </button>
      </div>
      <main className="counterPrinter">
        <section>{getCount}</section>
      </main>
    </div>
  );
};

export default Counter;
