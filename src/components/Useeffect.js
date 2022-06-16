import React, { useState, useEffect } from 'react';
export default function useeffect() {
  const [resolve, setResolve] = useState('Posts');
  console.log('render before ');
  useEffect(() => {
    console.log('ComponentDidMount Method Just time render');
  }, []);
  //Just one time it's running on onClick method. because dependency in state
  useEffect(() => {
    console.log('ComponentDidUpdate Method');
  }, [resolve]);
  // Call DummyApi
 
  return (
    <div>
      <button type="button" onClick={() => setResolve('posts')}>
        Posts
      </button>
      <br />
      <button type="button" onClick={() => setResolve('users')}>
        Users
      </button>
      <br />
      <button type="button" onClick={() => setResolve('comments')}>
        Comments
      </button>
      <br />
      <h4>{resolve}</h4>
    </div>
  );
}
