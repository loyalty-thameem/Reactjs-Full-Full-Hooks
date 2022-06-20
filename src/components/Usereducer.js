import React from 'react';
export default function usereducer() {
  //useReducer similar to useState. but useReduce is bigdeal and complex. It's also managed state.
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  // const [count, setCount] = React.useState(0);
  //function of usereducer
  function reducer(state, action) {
    switch (action.type) {
      case 'Increment':
        return {
          count: state.count + 1,
        };
      case 'Decrement':
        return {
          count: state.count + 1,
        };
    }
    return {
      count: state.count + 1,
    };
  }
  //Increment
  function handleClickIncrement() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({
      type: 'Increment',
    });
  }
  function handleClickdecrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({
      type: 'Decrement',
    });
  }
  return (
    <div>
      <h2>useReducer</h2>
      <span>
        {/* <b>{count}</b> */}
        <b>{state.count}</b>
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
