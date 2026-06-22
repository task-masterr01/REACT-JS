import React from 'react'
import Greet from './greet'


const App = () => {
  return (
    <div className='flex flex-col  gap-20 justify-items-center justify-center '>
        <Greet name="Hemant">
            <p>hemant is sendintg an paragraph tag </p>  
        </Greet>   
        <span></span>
        <Greet name="Bulbul">
            <button className='h-8 w-20 bg-blue-700 rounded-3xl text-white'>click me </button>
            <p>BUlbul is sending an button </p>
        </Greet>
        < Greet name="Aman" >
        <div className='flex flex-col gap-10 '>
            <p>Aman is sending an div tag</p>
            <div className='h-25 w-25 bg-red-500 rounded-3xl '></div>
        </div>
        </Greet>   
           
    </div>
  )
}

export default App
