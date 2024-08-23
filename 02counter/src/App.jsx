import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]= useState(0);
  // let counter= 15;

  const addValue= () =>{
    setCounter(counter+1);
  }

  const removeValue= ()=>{
    if(counter<=1) {setCounter(0); return}
    setCounter(counter-1);
  }

  return (
    <>
      <h1>React Learning</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue} >Add Value </button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
