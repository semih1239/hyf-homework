import './App.css';
import getTodos from './getTodos';
import React from "react";

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
    <button >Delete</button>
  </li>
}

let todo = todos.map((todo) => {
  return <Todos key={todo.id} description={todo.description} />
})

function App() {

  const [render, rendered] = React.useState([])

  function addRandom() {
    const random = (Math.floor(Math.random() * todo.length))
    const newRender = render.concat(todo[random])
    rendered(newRender)
    todo.splice(random, 1)
  }
  let text;
  if(render.length === 0){
    text = "No items"
  }
  // const deletedTodos = render.filter(todo => todo.description.props.children[0].includes(todo.description))
  // rendered(deletedTodos)

  const button = <button onClick={addRandom}>ADD TODO</button>

  return (
    <div>
      {button}
      <p>{text}</p>
      <ul>
        {render}
      </ul>
    </div>
  );
}

export default App;
