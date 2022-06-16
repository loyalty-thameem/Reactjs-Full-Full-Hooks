import React from 'react';
import './style.css';
import Usestate from './components/Usestate.js';
import Useeffect from './components/Useeffect.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Usestate />
      <Useeffect />
    </div>
  );
}
