import React from 'react';
export default function usereducer() {
  //useReducer similar to useState. but useReduce is bigdeal and complex. It's also managed state.
  // const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  const [count, setCount] = React.useState(0);
  //function of usereducer
  // function reducer(){}
  //Increment
  function handleClickIncrement() {
    setCount((prevCount) => prevCount + 1);
  }
  function handleClickdecrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <h2>useReducer</h2>
      <span>
        <b>{count}</b>
        {/* <b>{state.count}</b> */}
      </span>
      <br />
      <button type="button" onClick={handleClickIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleClickdecrement}>
        decrement
      </button>
    </div>
  );
}
