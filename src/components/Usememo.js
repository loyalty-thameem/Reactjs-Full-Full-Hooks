import React from 'react';
export default function usememo() {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);
  function handleChange(event) {
    setNumber(event.target.value);
    console.log('handleChange');
  }
  //style
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };
  const doubleNumber = slowFunction(parseInt(number));
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
