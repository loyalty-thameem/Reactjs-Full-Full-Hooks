import React from 'react';
export default function usereducer() {
  //useReducer similar to useState. but useReduce is bigdeal and complex. It's also managed state.
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  // const [count, setCount] = React.useState(0);
  //Default action type setup
  function ACTION() {
    return {
      INCREMENT: 'Increment',
      DECREMENT: 'Decrement',
    };
  }
  //function of usereducer
  function reducer(state, action) {
    switch (action.type) {
      case ACTION.INCREMENT:
        return {
          count: state.count + 1,
        };
      case ACTION.DECREMENT:
        return {
          count: state.count + 1,
        };
      default:
        return { state };
    }
  }
  //Increment
  function handleClickIncrement() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({
      type: ACTION.INCREMENT,
    });
  }
  function handleClickdecrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({
      type: ACTION.DECREMENT,
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
