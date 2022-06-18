import React from 'react';
export default function useref() {
  const [name, setName] = React.useState('');
  // import Useeffect from './components/Useeffect.js';
  // We can call function inside useRef()
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current = name;
  });

  return (
    <div>
      <h2>I'm UseRef()</h2>
      <input
        value={name}
        // ref={inputRef}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      <span>My Name is {name}</span>
      <br />
      <span>inputRef is {inputRef.current}</span>
      {/* <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Click to input focus
      </button> */}
    </div>
  );
}
