import React, { useState, useEffect } from 'react';
export default function useeffect() {
  const [resolve, setResolve] = useState('posts');
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  console.log('render before ');
  //Concept of useEffect hook
  // useEffect(() => {
  //   console.log('ComponentDidMount Method');
  //   return () => {
  //     console.log('ComponentWillUnmount Method');
  //   };
  // }, [width]);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  // ComponentDidMount and ComponentWillUnmount
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('ComponentDidMount Method Final render');
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('ComponentWillUnmount Method');
    };
  }, [width]);
  // Call DummyApi
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resolve}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    // .then((json) => console.log(json));
  }, [resolve]);
  return (
    <div>
      <pre>{width}</pre>
      <br />
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
            <p key={item.id}>
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
