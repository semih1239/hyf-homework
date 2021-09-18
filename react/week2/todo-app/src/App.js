import './App.css';
import getTodos from './getTodos';
import React, { useEffect } from 'react';

const todos = getTodos()

function Todos(props) {
  const [shouldLineThrought, changeShouldLineThrought] = React.useState(true)
  let description;
  if (shouldLineThrought) {
    description = <span>{props.description} </span>
  }
  else {
    description = <span style={{ textDecoration: 'line-through' }}>{props.description} </span>
  }

  const checkbox = <input type="checkbox" onClick={() => {
    const result = !shouldLineThrought
    changeShouldLineThrought(result)
  }} />

  return <li>
    {description}
    {checkbox}
    <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
  </li>
}

function App() {

  const [render, rendered] = React.useState([])
  const [todo, deletedTodos] = React.useState()
  const [randomTextKey, changeRandomTextKey] = React.useState(todos.length + 1)

  useEffect(() => {
    deletedTodos(todos.map((todo) => {
      return <Todos key={todo.id} description={todo.description} deleteTodo={() => deleteTodoItem(todo.id)} />
    }))
  }, [])

  function addRandom() {
    if (todo.length === 0) {
      return rendered((todo) => {
        changeRandomTextKey((key) => key += 1)
        return todo.concat(<Todos key={randomTextKey} description={"Random Text"} deleteTodo={() => deleteTodoItem(randomTextKey)} />)
      })
    }
    
    const random = (Math.floor(Math.random() * todo.length))
    const newRender = render.concat(todo[random])
    rendered(newRender)
    todo.splice(random, 1)
  }

  let text;
  if (render.length === 0) {
    text = "No items"
  }

  function deleteTodoItem(id) {
    rendered((todos) => {
      const renderedTodos = todos.filter(todo => todo.key != id)
      return renderedTodos
    })
  }

  return (
    <div>
      <button onClick={addRandom}>ADD TODO</button>
      <p>{text}</p>
      <ul>
        {render}
      </ul>
    </div>
  );
}

export default App;
