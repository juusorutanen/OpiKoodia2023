import React from 'react';
import './App.css';
import useCount from './hooks/useCount';



function App() {

  const [value, add, subtract] = useCount(10);
  return (
    <div className="App">
      <h4>Value:{value}</h4>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      
    </div>
  );
}

export default App;
