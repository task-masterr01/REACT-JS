import React from 'react'
import "./App.css"
import Counter from './components/counter'



const App = () => {
  return (
    <div className='w-75 min-h-50  flex flex-col gap-5 text-center'>
      <section className="  px-10  p-5 text-3xl" >Hi from App.jsx File</section>
      <Counter />
    </div>
    
  )
}

export default App
