import React from 'react';
export default function uselayouteffect() {
  const [count, setCount] = React.useState(0);
  React.useLayoutEffect(() => {
    console.log(
      'This hook similar to useEffect but useeffect is async. useLayoutEffect is sync method'
    );
  }, [count]);
  function handleClickToIncrement() {
    setCount((prevCount) => prevCount + 1);
  }
  function handleClickToDecrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <h3>{count}</h3>
      <button type="button" onClick={handleClickToIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleClickToDecrement}>
        Decrement
      </button>
    </div>
  );
}
