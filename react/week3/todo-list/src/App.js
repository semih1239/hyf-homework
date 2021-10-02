import './App.css';
import GetTimer from './header';
import Todolist from './renderTodo';

function App() {
  return (
    <div >
      <div>
        <GetTimer />
      </div>
      <div>
        <Todolist />
      </div>
    </div>
  );
}

export default App;
