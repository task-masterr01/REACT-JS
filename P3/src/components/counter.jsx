import React, { useState } from 'react'
import "./counter.css"

const Counter = () => {
    const [count , setCount] = useState(0);
    const increaseCount = ()=>{
        setCount(count+1);
    }
    const decreaseCount = ()=>{
        setCount(count-1);
    }
    const jumpCount = ()=>{
        setCount(count+5);
    }
    const resetCount = ()=>{
        setCount(0);
    }
  return (
    <div className=' flex flex-col  gap-5 text-2xl'>
      <p className=' '>you have clicked {count} times</p>
      <div className='grid grid-cols-2 gap-2.5'>
      <button onClick={increaseCount} className='border-3 rounded-lg bg-emerald-500'>Increase count </button>
      <button onClick={decreaseCount} className='border-3 rounded-lg bg-emerald-500'>Decrease count </button>
      <button onClick={jumpCount} className='border-3 rounded-lg bg-emerald-500'>Increase by five </button>
      <button onClick={resetCount} className='border-3 rounded-lg bg-emerald-500'>Reset count </button>
      </div>
    </div>
  )
}

export default Counter
