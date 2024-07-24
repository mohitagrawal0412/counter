import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className='parent'>
      <div className='container'>
        <div className='counter-display'>
          <h1>{counter}</h1>
        </div>
        <div className='buttons'>
          <button className='btn' onClick={() => {
            setCounter(counter + 1);
          }} > + </button>
          <button className='btn' onClick={() => {
            setCounter(counter - 1);
          }} > - </button>

        </div>
        <button className='btn reset' onClick={() => {
          setCounter(0);
        }} > Reset </button>
      </div>
    </div>
  );
}

export default App;
