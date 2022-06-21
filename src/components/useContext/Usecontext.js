import React from 'react';
import Classcomponentusecontext from './ClassComponentUseContext.js';
import Functionalcomponentusecontext from './FunctionalComponentUseContext.js';
//Create and export first
export const ThemesProvide = React.createContext({});

export default function usecontext() {
  const [darkTheme, setDarkTheme] = React.useState(false);
  //must export this
  return (
    <>
      <ThemesProvide.Provider value={{darkTheme,setDarkTheme}}>
        <h3>UseContext</h3>
        <button
          type="button"
          onClick={() => {
            setDarkTheme((prevDark) => !prevDark);
          }}
        >
          Toggle Change
        </button>
        <Classcomponentusecontext />
        <Functionalcomponentusecontext />
      </ThemesProvide.Provider>
    </>
  );
}
