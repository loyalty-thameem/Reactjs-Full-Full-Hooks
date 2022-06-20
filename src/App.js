import React from 'react';
import './style.css';
import Usestate from './components/Usestate.js';
import Useeffect from './components/Useeffect.js';
import Useref from './components/Useref.js';
import Usememo from './components/Usememo.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Usestate />
      <Useref />
      <Usememo />
      <Useeffect />
    </div>
  );
}
