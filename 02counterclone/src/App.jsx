import { useState } from 'react'
import './App.css'

function App() {

  // let ctr= 0;

  // const addval= ()=>{
  //   ctr= ctr+1;
  //   console.log("cttr",ctr);
  // }

  // const remval= ()=>{
  //   if(ctr<=0) ctr= 1;
  //   ctr= ctr-1;
  //   console.log("cttr",ctr);
  // }

  let [ctr, setCounter]= useState(0);

  const addval= () =>{
    setCounter(ctr+1);
  }

  const remval= () =>{
    if(ctr<=1){ setCounter(0); return;}
    setCounter(ctr-1);
  }

  return (
    <>
      <h1>React Again</h1>
      <p>Counter:{ctr}</p>
      <button onClick={addval} >Add</button>
      <br /> <br />
      <button onClick={remval}>Remove</button>
    </>
  )
  
}

export default App
/* So this is a perfect case why and where Hooks are used. 
   
   Here the value of 'ctr' changes when we click on Add button. 
   But the value of 'Counter' on UI doesn't. It remains the same but when in console logs, 
   we can observe that upon clicking the buttons(Add/Remove) value of 'ctr' is changing 
   but why doesn't it reflect on the Screen? Weird, right? 

   Well the answer is Yes and it happens because of our own 'React'. Ik ik then why the fk we're using it.
   Eh, it's not that weird. Our 'React' is a bit strict when it comes to UI. 'React' does not let 
   you render updated values using 'JS'. 

   Here is where 'Hooks' are used. Hooks let us use React features from Components like 'useState'.
  
   Two types: -Built-in hooks
              -Built your own hooks

   'Hooks' are used when it comes to updating values on UI.

*/