import React from 'react';
import { useThemeConsumer } from './ThemeContext.js';
export default function Functionalcomponentusecontext() {
  const { darkTheme, setDarkTheme } = useThemeConsumer();
  //FunctionalComponentUseContext and created it.
  console.log(
    'The theme from useContext and functional component ' + darkTheme
  );
  const themeStyles = {
    backgroundColor: darkTheme ? 'red' : 'yellow',
    color: darkTheme ? 'blue' : 'black',
    width: '250px',
    height: '100px',
  };
  return (
    <div style={themeStyles}>
      <h2>functional</h2>
      <button
        type="button"
        onClick={() => {
          setDarkTheme((prevDark) => !prevDark);
        }}
      >
        Toggle Change
      </button>
    </div>
  );
}
