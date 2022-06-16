import React, { useState, useEffect } from 'react';
export default function useeffect() {
  const [resolve, setResolve] = useState('Posts');
  console.log('render useEffect component ');
  useEffect(() => {
    console.log('ComponentDidMount Method');
  });
  //Just one time it's running on onClick method. because dependency in state
  useEffect(() => {
    console.log('ComponentDidUpdate Method');
  }, [resolve]);
  return (
    <div>
      <button type="button" onClick={() => setResolve('Posts')}>
        Posts
      </button>
      <br />
      <button type="button" onClick={() => setResolve('Users')}>
        Users
      </button>
      <br />
      <button type="button" onClick={() => setResolve('Comments')}>
        Comments
      </button>
      <br />
      <h4>{resolve}</h4>
    </div>
  );
}
