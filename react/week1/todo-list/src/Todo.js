import logo from './logo.svg';
import './App.css';

function Todos(props) {
  return (
    <div>
      <ul>
        <li>{props.description}</li>
        <li>{props.deadline}</li>
      </ul>
    </div>
  );
}

export default Todos;
