import React from 'react';
import { ThemesProvide } from './Usecontext.js';
export default function Functionalcomponentusecontext() {
  //FunctionalComponentUseContext and created it.
  const darkTheme = React.useContext(ThemesProvide);
  console.log('The theme from useContext and functional component');
  const themeStyles = {
    backgroundColor: darkTheme ? 'red' : 'yellow',
    color: darkTheme ? 'blue' : 'black',
    width: '250px',
    height: '100px',
  };
  return (
    <div style={themeStyles}>
      <h2>class</h2>
    </div>
  );
}
