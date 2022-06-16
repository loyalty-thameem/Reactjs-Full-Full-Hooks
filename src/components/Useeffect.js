import React, { useState, useEffect } from 'react';
export default function useeffect() {
  const [resolve, setResolve] = useState('posts');
  const [data, setData] = useState([]);
  console.log('render before ');

  // Call DummyApi
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resolve}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    // .then((json) => console.log(json));
  }, [resolve]);
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
      <br />
      <div>
        {data.map((item) => {
          return (
            <p>
              <b>Title:</b>
              {item.title} <b>Name:</b>
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
