import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmmount,
  reset,
} from "./Slice/CounterSlice";

import "./App.css";

const App = () => {
  const state1 = useSelector((state) => state.counte.value);
  const Dispatch = useDispatch();

  const [amount, setamount] = useState(0);

  function increase() {
    Dispatch(increment());
  }

  function decrease() {
    Dispatch(decrement());
  }

  function resetbtn() {
    Dispatch(reset());
  }

  function fixamount() {
    Dispatch(incrementByAmmount(Number(amount)));
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      <br />
      <span>{state1}</span>
      <br /> <br />
      <button onClick={decrease}>-</button>
      <br />
      <br />
      <button onClick={resetbtn}>reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={fixamount}>incrementByAmmount</button>
    </div>
  );
};

export default App;
