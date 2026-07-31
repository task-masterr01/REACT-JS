import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [count, setCount] = useState(0) ;
  const increaseCount = ()=>{
    setCount ( count + 1) ;
  }
  const decreaseCount = ()=>{
    setCount(count - 1) ;
  }
  
  const resetCount = ()=>{
    setCount(0) ;
  }

  return (
    <main>
        <h1> hello hemant welcome back</h1>
         <h3> Total Count : {count}</h3>

         <button onClick={increaseCount}>increse count</button>
         <br />
0         <button onClick={decreaseCount}>decrese count</button>
         <br />
         <button onClick={resetCount}> Reset count</button>
    </main>
  )
}

export default App
