import React from 'react';
// Todos components
function Todos({ todo }) {
  function toggleChange(){
    dispatch()
  }
  return (
    <div>
        <h5>{todo.name}</h5>
         <button type="button" onClick={toggleChange}>
        Toggle Change
      </button>
      <button type="button" onClick={}>
        Delete
      </button>
    </div>
  );
}
export default function usereducer() {
  //useReducer similar to useState. but useReduce is bigdeal and complex. It's also managed state.
  const [todos, dispatch] = React.useReducer(reducer, []);
  const [name, setName] = React.useState('');
  //Default action type setup
  function ACTION() {
    return {
      ADD_TODO: 'add-todo',
    };
  }
  //function of usereducer
  function reducer(todos, action) {
    switch (action.type) {
      case ACTION.ADD_TODO:
        return {
          todos: [...todos, createTodo(action.payload.name)],
        };

      default:
        return { todos };
    }
  }
  //createTodo function
  function createTodo(name) {
    return {
      name: name,
      id: new Date().getSeconds(),
      completed: false,
    };
  }
  //input onChanges
  function handleChange(event) {
    setName(event.target.value);
  }
  //handleSubmitted
  function handleSubmitted(event) {
    event.preventDefault();
    dispatch({
      type: ACTION.ADD_TODO,
      payload: {
        name: name,
      },
    });
    console.log('onSubmit');
    setName('');
  }
  // console.log(todos);
  return (
    <div>
      <h2>useReducer</h2>
      <form onSubmit={handleSubmitted}>
        <input type="text" value={name} onChange={handleChange} />
        <br />
        {name}
      </form>
      {todos.map(todo=>{
      <Todos todo={todo} dispatch={dispatch} />
      })}
    </div>
  );
}
