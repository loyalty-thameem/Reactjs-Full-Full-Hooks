import React from 'react';
export default function usememo() {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);
  function handleChange(event) {
    setNumber(event.target.value);
    console.log('handleChange');
  }
  //style
  //2: why used useMemo because the dark theme only change without input value.only render for dark theme.
  const themeStyles = React.useMemo(() => {
    console.log('only render for dark state');
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);
  //UseEffect
  // themeStyles called everytime likes input change and themeStyles change
  React.useEffect(() => {
    console.log('themeChanged');
  }, [themeStyles]);
  //Added usememo because slowFunction every change time is slow. use memo stored data. it's memoization
  const doubleNumber = React.useMemo(
    () => slowFunction(parseInt(number)),
    [number]
  );
  //slowFunction
  //2 when use useMemo? when use slowFunction you can use useMemo on the time
  function slowFunction(num) {
    for (let i = 0; i <= 1000000; i++) {
      console.log('loop in');
      return num + 2;
    }
  }
  return (
    <div>
      <h2>usememo</h2>
      <input type="number" value={number} onChange={handleChange} />
      <button
        type="button"
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        onChange
      </button>
      <br />
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}
