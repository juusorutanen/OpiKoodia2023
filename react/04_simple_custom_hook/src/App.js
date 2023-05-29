import './App.css';
import useCount from './hooks/useCount';

function App() {

  const [value,add,substract] = useCount();
  
  return (
    <div className="App">
      <h4>Count:{value}</h4>
      <button onClick={substract}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
