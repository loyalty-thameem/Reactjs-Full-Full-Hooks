import React from 'react';
import './style.css';
import Usestate from './components/Usestate.js';
import Useeffect from './components/Useeffect.js';
import Useref from './components/Useref.js';
import Usememo from './components/Usememo.js';
import Usecallback from './components/Usecallback.js';
import Usereducer from './components/Usereducer.js';

export default function App() {
  return (
    <div>
      <Usestate />
      <Useref />
      <Usememo />
      <Usereducer />
      <Usecallback />
      <Useeffect />
    </div>
  );
}
