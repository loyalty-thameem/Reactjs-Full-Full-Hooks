import React from 'react';
function List({ getItems }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    console.log('this is useEffect. updating......');
    setData(getItems);
  }, [getItems]);
  return (
    <div>
      {data.map((items) => (
        <h4 key={items}>{items}</h4>
      ))}
    </div>
  );
}
export default function usecallback() {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);
  //only render for input changes. not render for dark theme
  const getItems = React.useCallback(() => {
    console.log('use Call back');
    return [number, number + 2, number + 5];
  }, [number]);
  //style
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: !dark ? 'black' : 'white',
  };
  function handleThemeChange() {
    setDark((prevDark) => !prevDark);
  }
  return (
    <div style={themeStyles}>
      <h2>usecallback</h2>
      <div />
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <div />
      <br />
      <button type="button" onClick={handleThemeChange}>
        Toggle Theme
      </button>
      <br />
      {/* <span>{number}</span> */}
      <div />
      <List getItems={getItems} />
    </div>
  );
}
