import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './Todo';
import reportWebVitals from './reportWebVitals';
import getTodos from './getTodos'

const todos = getTodos()

function Render(){
  return (
    <div>
      {todos.map((todo) => {
        return <Todos key={todo.id} description={todo.description} deadline={todo.deadline} />
      })}
    </div>
  )
}

ReactDOM.render(<Render />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
