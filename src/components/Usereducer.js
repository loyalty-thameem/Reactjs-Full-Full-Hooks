import React from 'react';
// // Todos components
function Todos({ todo,dispatch }) {
  function toggleChange(){
    dispatch({
      type:ACTION.TOGGLE_TODO,
      id:todo.id
    })
  }
  return (
    <div>
        <span style={{backgroundColor:todo.completed?'green':'red'}}><b>{todo.name}{' '}</b></span>
        <button type="button" onClick={toggleChange}>
        Toggle Change
      </button>
      <button type="button" onClick={}>
        Delete
      </button>
    </div>
  );
}
 //Default action type setup
 function ACTION() {
  return {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO:'toggle-todo'
  };
}
//function of usereducer
function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return  [...todos, createTodo(action.payload.name)];
      case ACTION.TOGGLE_TODO:{
       return todos.map(todo=>{
        if(todo.id === action.payload.id){
          return{...todo,completed:!todo.completed}
        }
        return todo;
      })
      }
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
export default function usereducer() {
  //useReducer similar to useState. but useReduce is bigdeal and complex. It's also managed state.
  const [todos, dispatch] = React.useReducer(reducer, []);
  const [name, setName] = React.useState('');
 
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
  console.log(todos);
  return (
    <div>
      <h2>useReducer</h2>
      <form onSubmit={handleSubmitted}>
        <input type="text" value={name} onChange={handleChange} />
        <br />
      </form>
      {/* {todos.map(todo=>console.log(todo.name))} */}
      {
        todos.map(todo=>{
          return <Todos todo={todo} dispatch={dispatch} />
        })
      }
    </div>
  );
}
