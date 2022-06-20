import React from 'react';
import './style.css';
import Usestate from './components/Usestate.js';
import Useeffect from './components/Useeffect.js';
import Useref from './components/Useref.js';
import Usememo from './components/Usememo.js';
import Usecallback from './components/Usecallback.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Usestate />
      <Useref />
      <Usememo />
      <Usecallback />
      <Useeffect />
    </div>
  );
}
