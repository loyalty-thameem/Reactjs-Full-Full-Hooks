import React from 'react';
export default function usereducer() {
  //useReducer similar to useState. but useReduce is bigdeal and complex. It's also managed state.
  const [todos, dispatch] = React.useReducer(reducer, []);
  const [name, setName] = React.useState('');
  //Default action type setup
  function ACTION() {
    return {
     ADD_TODO:'add-todo'
    };
  }
  //function of usereducer
  function reducer(todos, action) {
    switch (action.type) {
      case ACTION.ADD_TODO:
        return {
          todos:[...todos,createTodo()],
        };
    
      default:
        return { todos };
    }
  }
  //createTodo function
  function createTodo(){

  }
  //input onChanges 
  function handleChange(event){
   setName(event.target.value); 
  }
  return (
    <div>
      <h2>useReducer</h2>
      <form onSumbit={}>
     <input type='text' value={name} onChange={handleChange}/>
      <br />
  </form>
    </div>
  );
}
{/* <button type="button" onClick={handleClickIncrement}>
Increment
</button>
<button type="button" onClick={handleClickdecrement}>
decrement
</button> */}