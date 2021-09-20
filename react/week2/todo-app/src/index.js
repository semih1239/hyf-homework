import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function GetTimer() {
  const [time, timer] = React.useState(0)
  useEffect(() => {
    setInterval(() => {
      timer(time => time + 1)
    }, 1000)
  },[])
  
  const render = <div>
    <h1>Todolist</h1>
    <p>You have used {time} seconds on this website</p>
  </div>

  return render
}

function Render() {
  return <div>
    <div>
      <GetTimer />
    </div>
    <div>
      <App />
    </div>
  </div>
}


ReactDOM.render(
  <React.StrictMode>
  <Render />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
